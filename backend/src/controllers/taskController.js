const pool = require('../config/db');

const getTasks = async (req, res) => {
  const { priority } = req.query;
  const userId = req.user.id;
  try {
    let query = 'SELECT * FROM tasks WHERE user_id = $1';
    const params = [userId];
    if (priority) {
      query += ' AND priority = $2';
      params.push(priority);
    }
    query += ' ORDER BY due_date ASC NULLS LAST, created_at DESC';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const { title, description, priority, due_date } = req.body;
  const userId = req.user.id;
  try {
    const result = await pool.query(
      'INSERT INTO tasks (user_id, title, description, priority, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, title, description, priority || 'medium', due_date || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, due_date } = req.body;
  const userId = req.user.id;
  try {
    const result = await pool.query(
      'UPDATE tasks SET title=$1, description=$2, priority=$3, due_date=$4 WHERE id=$5 AND user_id=$6 RETURNING *',
      [title, description, priority, due_date || null, id, userId]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const toggleTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const result = await pool.query(
      'UPDATE tasks SET completed = NOT completed WHERE id=$1 AND user_id=$2 RETURNING *',
      [id, userId]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    await pool.query('DELETE FROM tasks WHERE id=$1 AND user_id=$2', [id, userId]);
    res.json({ message: 'Tarefa deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTasks, createTask, updateTask, toggleTask, deleteTask };