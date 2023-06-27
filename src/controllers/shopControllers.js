const ItemsService = require('../services/itemServices');


module.exports = {
  shopView:  async (req, res) => {
    const items = await ItemsService.getAllItems();
    res.send({
      view: 'Shop view',
      items
    });
  },
  itemView: async (req, res) => {
    const id = req.params.id;
    const item = await ItemsService.getItem(id);
    res.send({
      view: 'Item View',
      item
    });
  },
  addItemToCart: (req, res) => res.send('Route to add a item to cart'),
  cartView: (req, res) => res.send('Cart View Route'),
  checkout: (req, res) => res.send('Route to receive the selected products and init the buy process'),
};