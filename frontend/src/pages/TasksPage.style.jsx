import styled from 'styled-components';

export const PageWrapperSC = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const ContentSC = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const HeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const TitleSC = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
`;

export const FilterBarSC = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const FilterBtnSC = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1.5px solid ${({ $active, theme }) => $active ? theme.primary : theme.border};
  background: ${({ $active, theme }) => $active ? theme.primary : 'transparent'};
  color: ${({ $active, theme }) => $active ? 'white' : theme.textSecondary};
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  &:hover { border-color: ${({ theme }) => theme.primary}; }
`;

export const AddButtonSC = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-1px);
  }
`;

export const EmptyStateSC = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  color: ${({ theme }) => theme.textSecondary};

  p { margin-top: 0.5rem; font-size: 0.9rem; }
`;