module.exports = {
  shopView: (req, res) => res.send('Shop View Route - All items'),
  itemView: (req, res) => res.send('Individual Item View Route'),
  addItemToCart: (req, res) => res.send('Route to add a item to cart'),
  cartView: (req, res) => res.send('Cart View Route'),
  checkout: (req, res) => res.send('Route to receive the selected products and init the buy process'),
};