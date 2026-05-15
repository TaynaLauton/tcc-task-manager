import styled from 'styled-components';

export const ContainerSC = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`;

export const CardSC = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const LogoSC = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

export const SubtitleSC = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

export const InputGroupSC = styled.div`
  position: relative;
  margin-bottom: 1.2rem;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const InputSC = styled.input`
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.8rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonSC = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.7; cursor: not-allowed; }
`;

export const ErrorMsgSC = styled.p`
  color: ${({ theme }) => theme.danger};
  font-size: 0.85rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.priorityHigh};
  border-radius: 8px;
`;

export const LinkTextSC = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`;