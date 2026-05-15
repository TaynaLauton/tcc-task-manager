import { useState, useEffect } from 'react';
import { FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import api from '../services/api';
import Navbar from '../components/Layout/Navbar';
import {
  PageWrapperSC, ContentSC, TitleSC, NewListFormSC, InputSC,
  AddListBtnSC, GridSC, ListCardSC, ListHeaderSC, ListNameSC,
  ListActionsSC, IconBtnSC, ItemsContainerSC, ItemRowSC,
  ItemCheckSC, ItemNameSC, AddItemFormSC, SmallInputSC, SmallBtnSC, EmptyStateSC
} from './ShoppingPage.style';

export default function ShoppingPage() {
  const [lists, setLists] = useState([]);
  const [items, setItems] = useState({});
  const [newListName, setNewListName] = useState('');
  const [newItem, setNewItem] = useState({});

  const fetchLists = async () => {
    const { data } = await api.get('/shopping/lists');
    setLists(data);
    data.forEach(list => fetchItems(list.id));
  };

  const fetchItems = async (listId) => {
    const { data } = await api.get(`/shopping/lists/${listId}/items`);
    setItems(prev => ({ ...prev, [listId]: data }));
  };

  useEffect(() => { fetchLists(); }, []);

  const handleCreateList = async (e) => {
    e.preventDefault();
    if (!newListName.trim()) return;
    await api.post('/shopping/lists', { name: newListName });
    setNewListName('');
    fetchLists();
  };

  const handleDeleteList = async (id) => {
    if (window.confirm('Deletar esta lista?')) {
      await api.delete(`/shopping/lists/${id}`);
      fetchLists();
    }
  };

  const handleToggleItem = async (listId, itemId) => {
    await api.patch(`/shopping/items/${itemId}/toggle`);
    fetchItems(listId);
  };

  const handleDeleteItem = async (listId, itemId) => {
    await api.delete(`/shopping/items/${itemId}`);
    fetchItems(listId);
  };

  const handleAddItem = async (e, listId) => {
    e.preventDefault();
    const name = newItem[listId];
    if (!name?.trim()) return;
    await api.post(`/shopping/lists/${listId}/items`, { name });
    setNewItem(prev => ({ ...prev, [listId]: '' }));
    fetchItems(listId);
  };

  return (
    <PageWrapperSC>
      <Navbar />
      <ContentSC>
        <TitleSC>🛒 Listas de Compras</TitleSC>

        <NewListFormSC>
          <InputSC placeholder="Nome da nova lista (ex: Mercado da semana)"
            value={newListName} onChange={e => setNewListName(e.target.value)} />
          <AddListBtnSC onClick={handleCreateList}>
            <FiPlus size={18} /> Criar Lista
          </AddListBtnSC>
        </NewListFormSC>

        {lists.length === 0 ? (
          <EmptyStateSC>
            <h3>Nenhuma lista criada</h3>
            <p>Crie sua primeira lista de compras!</p>
          </EmptyStateSC>
        ) : (
          <GridSC>
            {lists.map(list => (
              <ListCardSC key={list.id}>
                <ListHeaderSC>
                  <ListNameSC><FiShoppingBag size={14} /> {list.name}</ListNameSC>
                  <ListActionsSC>
                    <IconBtnSC $danger onClick={() => handleDeleteList(list.id)}>
                      <FiTrash2 size={14} />
                    </IconBtnSC>
                  </ListActionsSC>
                </ListHeaderSC>

                <ItemsContainerSC>
                  {(items[list.id] || []).map(item => (
                    <ItemRowSC key={item.id}>
                      <ItemCheckSC type="checkbox" checked={item.checked}
                        onChange={() => handleToggleItem(list.id, item.id)} />
                      <ItemNameSC $checked={item.checked}>{item.name}</ItemNameSC>
                      <IconBtnSC $danger onClick={() => handleDeleteItem(list.id, item.id)}>
                        <FiTrash2 size={13} />
                      </IconBtnSC>
                    </ItemRowSC>
                  ))}
                </ItemsContainerSC>

                <AddItemFormSC onSubmit={e => handleAddItem(e, list.id)}>
                  <SmallInputSC placeholder="Adicionar item..."
                    value={newItem[list.id] || ''}
                    onChange={e => setNewItem(prev => ({ ...prev, [list.id]: e.target.value }))} />
                  <SmallBtnSC type="submit"><FiPlus size={14} /></SmallBtnSC>
                </AddItemFormSC>
              </ListCardSC>
            ))}
          </GridSC>
        )}
      </ContentSC>
    </PageWrapperSC>
  );
}