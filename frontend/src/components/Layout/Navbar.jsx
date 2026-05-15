import { useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiLogOut, FiCheckSquare, FiShoppingCart } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import {
  NavSC, LogoSC, NavLinksSC, NavLinkSC, ActionsSC, IconButtonSC
} from './Navbar.style';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <NavSC>
      <LogoSC to="/tasks">TaskFlow ✦</LogoSC>

      <NavLinksSC>
        <NavLinkSC to="/tasks"><FiCheckSquare size={16} /> Tarefas</NavLinkSC>
        <NavLinkSC to="/shopping"><FiShoppingCart size={16} /> Compras</NavLinkSC>
      </NavLinksSC>

      <ActionsSC>
        <span style={{ fontSize: '0.85rem', color: 'gray' }}>
          Olá, {user?.name?.split(' ')[0]}
        </span>
        <IconButtonSC onClick={toggleTheme} title="Alternar tema">
          {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </IconButtonSC>
        <IconButtonSC onClick={handleLogout} title="Sair">
          <FiLogOut size={18} />
        </IconButtonSC>
      </ActionsSC>
    </NavSC>
  );
}