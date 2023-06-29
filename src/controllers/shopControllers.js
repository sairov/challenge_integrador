const ItemsService = require('../services/itemServices');


module.exports = {
  shopView:  async (req, res) => {
    const items = await ItemsService.getAllItems();
    const { data } = items;
    res.render( './shop/shop',{
      view: {
        title: "Shop | Funkoshop"
      },
      items: data
    });
  },
  detailView: async (req, res) => {
    const id = req.params.id;
    const item = await ItemsService.getItem(id);
    const { data } = item;

    if (!data[0]) {
      res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
    }

    res.render('./shop/detail', {
      view: {
        title: "Item | Funkoshop"
      },
      item: data[0]
    });
  },
  addItemToCart: (req, res) => res.send('Route to add a item to cart'),
  cartView: (req, res) => res.send('Cart View Route'),
  checkout: (req, res) => res.send('Route to receive the selected products and init the buy process'),
};