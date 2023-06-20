const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Shop View Route - All items'));
router.get('/item/:id', (req, res) => res.send('Inividual Item View Route'));
router.post('/item/:id/add', (req, res) => res.send('Route to add a item to cart'));
router.get('/cart', (req, res) => res.send('Cart View Route'));
router.post('/cart', (req, res) => res.send('Route to receive the selected products and init the buy process'));

module.exports = router;