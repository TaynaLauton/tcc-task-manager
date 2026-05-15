import styled from 'styled-components';

export const CardSC = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 14px;
  padding: 1.2rem 1.5rem;
  margin-bottom: 0.75rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.2s;
  opacity: ${({ $completed }) => $completed ? '0.7' : '1'};
  box-shadow: ${({ theme }) => theme.shadow};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
`;

export const CheckboxSC = styled.button`
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 6px;
  border: 2px solid ${({ $completed, theme }) => $completed ? theme.success : theme.border};
  background: ${({ $completed, theme }) => $completed ? theme.success : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  margin-top: 2px;

  &::after {
    content: '✓';
    color: white;
    font-size: 13px;
    display: ${({ $completed }) => $completed ? 'block' : 'none'};
  }

  &:hover { border-color: ${({ theme }) => theme.success}; }
`;

export const InfoSC = styled.div`flex: 1;`;

export const TaskTitleSC = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-decoration: ${({ $completed }) => $completed ? 'line-through' : 'none'};
  margin-bottom: 0.3rem;
`;

export const DescriptionSC = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
`;

export const MetaSC = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const PriorityBadgeSC = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  background: ${({ $priority, theme }) =>
    $priority === 'high' ? theme.priorityHigh :
    $priority === 'medium' ? theme.priorityMedium : theme.priorityLow};
  color: ${({ $priority, theme }) =>
    $priority === 'high' ? theme.priorityHighText :
    $priority === 'medium' ? theme.priorityMediumText : theme.priorityLowText};
`;

export const DateLabelSC = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: ${({ $overdue, theme }) => $overdue ? theme.danger : theme.textSecondary};
`;

export const ActionsSC = styled.div`display: flex; gap: 0.4rem;`;

export const ActionBtnSC = styled.button`
  padding: 0.4rem;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.2s;

  &:hover {
    background: ${({ $danger, theme }) => $danger ? theme.priorityHigh : theme.border};
    color: ${({ $danger, theme }) => $danger ? theme.danger : theme.text};
  }
`;