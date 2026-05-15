import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import {
  ContainerSC, CardSC, LogoSC, SubtitleSC,
  InputGroupSC, InputSC, ButtonSC, ErrorMsgSC, LinkTextSC
} from '../components/Auth/AuthStyles.style';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/tasks');
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerSC>
      <CardSC>
        <LogoSC>TaskFlow ✦</LogoSC>
        <SubtitleSC>Bem-vindo de volta! Faça login para continuar.</SubtitleSC>

        {error && <ErrorMsgSC>{error}</ErrorMsgSC>}

        <form onSubmit={handleSubmit}>
          <InputGroupSC>
            <FiMail size={16} />
            <InputSC type="email" placeholder="E-mail" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} required />
          </InputGroupSC>

          <InputGroupSC>
            <FiLock size={16} />
            <InputSC type="password" placeholder="Senha" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })} required />
          </InputGroupSC>

          <ButtonSC type="submit" disabled={loading}>
            <FiLogIn size={18} />
            {loading ? 'Entrando...' : 'Entrar'}
          </ButtonSC>
        </form>

        <LinkTextSC>
          Não tem conta? <Link to="/register">Criar conta</Link>
        </LinkTextSC>
      </CardSC>
    </ContainerSC>
  );
}