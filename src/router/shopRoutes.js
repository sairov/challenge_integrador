const express = require('express');
const router = express.Router();

const {
  shopView,
  itemView,
  addItemToCart,
  cartView,
  checkout,
} = require('../controllers/shopControllers');

router.get('/', shopView);
router.get('/item/:id', itemView);
router.post('/item/:id/add', addItemToCart);
router.get('/cart', cartView);
router.post('/cart', checkout);

module.exports = router;