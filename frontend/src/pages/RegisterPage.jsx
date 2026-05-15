import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiMail, FiLock, FiUserPlus } from 'react-icons/fi';
import {
  ContainerSC, CardSC, LogoSC, SubtitleSC,
  InputGroupSC, InputSC, ButtonSC, ErrorMsgSC, LinkTextSC
} from '../components/Auth/AuthStyles.style';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      navigate('/tasks');
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerSC>
      <CardSC>
        <LogoSC>TaskFlow ✦</LogoSC>
        <SubtitleSC>Crie sua conta e organize sua vida!</SubtitleSC>

        {error && <ErrorMsgSC>{error}</ErrorMsgSC>}

        <form onSubmit={handleSubmit}>
          <InputGroupSC>
            <FiUser size={16} />
            <InputSC placeholder="Nome completo" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} required />
          </InputGroupSC>

          <InputGroupSC>
            <FiMail size={16} />
            <InputSC type="email" placeholder="E-mail" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} required />
          </InputGroupSC>

          <InputGroupSC>
            <FiLock size={16} />
            <InputSC type="password" placeholder="Senha (mínimo 6 caracteres)" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })} required minLength={6} />
          </InputGroupSC>

          <ButtonSC type="submit" disabled={loading}>
            <FiUserPlus size={18} />
            {loading ? 'Criando conta...' : 'Criar conta'}
          </ButtonSC>
        </form>

        <LinkTextSC>
          Já tem conta? <Link to="/login">Fazer login</Link>
        </LinkTextSC>
      </CardSC>
    </ContainerSC>
  );
}