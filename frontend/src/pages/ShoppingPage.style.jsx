import styled from 'styled-components';

export const PageWrapperSC = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const ContentSC = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const TitleSC = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

export const NewListFormSC = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const InputSC = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  &:focus { outline: none; border-color: ${({ theme }) => theme.primary}; }
`;

export const AddListBtnSC = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1.2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
  &:hover { background: ${({ theme }) => theme.primaryHover}; }
`;

export const GridSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const ListCardSC = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 16px;
  border: 1.5px solid ${({ theme }) => theme.border};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

export const ListHeaderSC = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.primary}18;
`;

export const ListNameSC = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const ListActionsSC = styled.div`display: flex; gap: 0.4rem;`;

export const IconBtnSC = styled.button`
  padding: 0.35rem;
  border-radius: 8px;
  background: transparent;
  color: ${({ $danger, theme }) => $danger ? theme.danger : theme.textSecondary};
  transition: all 0.2s;
  &:hover { background: ${({ theme }) => theme.border}; }
`;

export const ItemsContainerSC = styled.div`padding: 0.75rem;`;

export const ItemRowSC = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.15s;
  &:hover { background: ${({ theme }) => theme.background}; }
`;

export const ItemCheckSC = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.primary};
`;

export const ItemNameSC = styled.span`
  flex: 1;
  font-size: 0.9rem;
  color: ${({ $checked, theme }) => $checked ? theme.textSecondary : theme.text};
  text-decoration: ${({ $checked }) => $checked ? 'line-through' : 'none'};
`;

export const AddItemFormSC = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const SmallInputSC = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.85rem;
  &:focus { outline: none; border-color: ${({ theme }) => theme.primary}; }
`;

export const SmallBtnSC = styled.button`
  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s;
  &:hover { background: ${({ theme }) => theme.primaryHover}; }
`;

export const EmptyStateSC = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.textSecondary};
`;