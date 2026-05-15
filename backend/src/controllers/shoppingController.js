const pool = require('../config/db');

const getLists = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM shopping_lists WHERE user_id=$1 ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const createList = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO shopping_lists (user_id, name) VALUES ($1, $2) RETURNING *',
      [req.user.id, name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const updateList = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await pool.query(
      'UPDATE shopping_lists SET name=$1 WHERE id=$2 AND user_id=$3 RETURNING *',
      [name, id, req.user.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Lista não encontrada' });
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const deleteList = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM shopping_lists WHERE id=$1 AND user_id=$2', [id, req.user.id]);
    res.json({ message: 'Lista deletada com sucesso' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const getItems = async (req, res) => {
  const { listId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM shopping_items WHERE list_id=$1 ORDER BY created_at ASC',
      [listId]
    );
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const createItem = async (req, res) => {
  const { listId } = req.params;
  const { name, quantity, unit } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO shopping_items (list_id, name, quantity, unit) VALUES ($1, $2, $3, $4) RETURNING *',
      [listId, name, quantity || 1, unit || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, unit } = req.body;
  try {
    const result = await pool.query(
      'UPDATE shopping_items SET name=$1, quantity=$2, unit=$3 WHERE id=$4 RETURNING *',
      [name, quantity, unit, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Item não encontrado' });
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const toggleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'UPDATE shopping_items SET checked = NOT checked WHERE id=$1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Item não encontrado' });
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM shopping_items WHERE id=$1', [id]);
    res.json({ message: 'Item deletado com sucesso' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

module.exports = {
  getLists, createList, updateList, deleteList,
  getItems, createItem, updateItem, toggleItem, deleteItem
};