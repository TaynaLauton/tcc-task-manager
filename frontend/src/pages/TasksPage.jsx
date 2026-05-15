import { useState, useEffect } from 'react';
import { FiFilter, FiPlus } from 'react-icons/fi';
import api from '../services/api';
import Navbar from '../components/Layout/Navbar';
import TaskForm from '../components/Tasks/TaskForm';
import TaskItem from '../components/Tasks/TaskItem';
import {
  PageWrapperSC, ContentSC, HeaderSC, TitleSC,
  FilterBarSC, FilterBtnSC, AddButtonSC, EmptyStateSC
} from './TasksPage.style';

const filters = [
  { label: 'Todas', value: 'all' },
  { label: '🔴 Alta', value: 'high' },
  { label: '🟡 Média', value: 'medium' },
  { label: '🟢 Baixa', value: 'low' },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async (priority) => {
    setLoading(true);
    try {
      const params = priority && priority !== 'all' ? { priority } : {};
      const { data } = await api.get('/tasks', { params });
      setTasks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(filter); }, [filter]);

  const handleToggle = async (id) => {
    await api.patch(`/tasks/${id}/toggle`);
    fetchTasks(filter);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Deseja excluir esta tarefa?')) {
      await api.delete(`/tasks/${id}`);
      fetchTasks(filter);
    }
  };

  const handleSave = () => {
    setShowForm(false);
    setEditTask(null);
    fetchTasks(filter);
  };

  return (
    <PageWrapperSC>
      <Navbar />
      <ContentSC>
        <HeaderSC>
          <TitleSC>Minhas Tarefas</TitleSC>
          <AddButtonSC onClick={() => { setShowForm(true); setEditTask(null); }}>
            <FiPlus size={18} /> Nova Tarefa
          </AddButtonSC>
        </HeaderSC>

        <FilterBarSC>
          <FiFilter size={16} style={{ alignSelf: 'center', color: 'gray' }} />
          {filters.map(f => (
            <FilterBtnSC key={f.value} $active={filter === f.value} onClick={() => setFilter(f.value)}>
              {f.label}
            </FilterBtnSC>
          ))}
        </FilterBarSC>

        {(showForm || editTask) && (
          <TaskForm task={editTask} onSave={handleSave}
            onCancel={() => { setShowForm(false); setEditTask(null); }} />
        )}

        {loading ? (
          <p style={{ textAlign: 'center', color: 'gray' }}>Carregando...</p>
        ) : tasks.length === 0 ? (
          <EmptyStateSC>
            <h3>Nenhuma tarefa encontrada</h3>
            <p>Clique em "Nova Tarefa" para começar!</p>
          </EmptyStateSC>
        ) : (
          tasks.map(task => (
            <TaskItem key={task.id} task={task}
              onToggle={handleToggle}
              onEdit={() => { setEditTask(task); setShowForm(false); }}
              onDelete={handleDelete} />
          ))
        )}
      </ContentSC>
    </PageWrapperSC>
  );
}