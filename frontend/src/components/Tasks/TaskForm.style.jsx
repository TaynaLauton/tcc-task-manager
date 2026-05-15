import styled from 'styled-components';

export const FormCardSC = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

export const FormTitleSC = styled.h3`
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const RowSC = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => cols || '1fr'};
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const FieldSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const InputSC = styled.input`
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  transition: border-color 0.2s;

  &:focus { outline: none; border-color: ${({ theme }) => theme.primary}; }
`;

export const SelectSC = styled.select`
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  cursor: pointer;

  &:focus { outline: none; border-color: ${({ theme }) => theme.primary}; }
`;

export const TextareaSC = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  resize: vertical;
  min-height: 80px;

  &:focus { outline: none; border-color: ${({ theme }) => theme.primary}; }
`;

export const ButtonsSC = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

export const BtnSC = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;

  ${({ variant, theme }) => variant === 'primary' ? `
    background: ${theme.primary};
    color: white;
    &:hover { background: ${theme.primaryHover}; }
  ` : `
    background: ${theme.background};
    color: ${theme.textSecondary};
    border: 1.5px solid ${theme.border};
    &:hover { border-color: ${theme.text}; color: ${theme.text}; }
  `}
`;