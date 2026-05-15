import { useState, useEffect } from 'react';
import { FiSave, FiX } from 'react-icons/fi';
import api from '../../services/api';
import {
  FormCardSC, FormTitleSC, RowSC, FieldSC,
  InputSC, SelectSC, TextareaSC, ButtonsSC, BtnSC
} from './TaskForm.style';

export default function TaskForm({ task, onSave, onCancel }) {
  const [form, setForm] = useState({ title: '', description: '', priority: 'medium', due_date: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title || '',
        description: task.description || '',
        priority: task.priority || 'medium',
        due_date: task.due_date ? task.due_date.split('T')[0] : ''
      });
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (task) {
        await api.put(`/tasks/${task.id}`, form);
      } else {
        await api.post('/tasks', form);
      }
      onSave();
    } catch {
      alert('Erro ao salvar tarefa');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormCardSC>
      <FormTitleSC>{task ? 'Editar Tarefa' : 'Nova Tarefa'}</FormTitleSC>
      <form onSubmit={handleSubmit}>
        <FieldSC style={{ marginBottom: '1rem' }}>
          <label>Título *</label>
          <InputSC placeholder="Ex: Estudar para prova..." value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })} required />
        </FieldSC>

        <FieldSC style={{ marginBottom: '1rem' }}>
          <label>Descrição</label>
          <TextareaSC placeholder="Detalhes da tarefa..." value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })} />
        </FieldSC>

        <RowSC cols="1fr 1fr">
          <FieldSC>
            <label>Prioridade</label>
            <SelectSC value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}>
              <option value="low">🟢 Baixa</option>
              <option value="medium">🟡 Média</option>
              <option value="high">🔴 Alta</option>
            </SelectSC>
          </FieldSC>

          <FieldSC>
            <label>Data limite</label>
            <InputSC type="date" value={form.due_date}
              onChange={e => setForm({ ...form, due_date: e.target.value })} />
          </FieldSC>
        </RowSC>

        <ButtonsSC>
          <BtnSC type="button" onClick={onCancel}><FiX size={16} /> Cancelar</BtnSC>
          <BtnSC type="submit" variant="primary" disabled={loading}>
            <FiSave size={16} /> {loading ? 'Salvando...' : 'Salvar'}
          </BtnSC>
        </ButtonsSC>
      </form>
    </FormCardSC>
  );
}