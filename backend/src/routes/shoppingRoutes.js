const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getLists, createList, updateList, deleteList,
  getItems, createItem, updateItem, toggleItem, deleteItem
} = require('../controllers/shoppingController');

router.get('/lists', auth, getLists);
router.post('/lists', auth, createList);
router.put('/lists/:id', auth, updateList);
router.delete('/lists/:id', auth, deleteList);

router.get('/lists/:listId/items', auth, getItems);
router.post('/lists/:listId/items', auth, createItem);
router.put('/items/:id', auth, updateItem);
router.patch('/items/:id/toggle', auth, toggleItem);
router.delete('/items/:id', auth, deleteItem);

module.exports = router;