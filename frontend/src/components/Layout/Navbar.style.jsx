import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavSC = styled.nav`
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const LogoSC = styled(Link)`
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;

export const NavLinksSC = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const NavLinkSC = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
  }
`;

export const ActionsSC = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconButtonSC = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textSecondary};
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
  }
`;