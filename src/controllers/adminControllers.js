const ItemsService = require('../services/itemServices');

module.exports = {
  adminView: async (req, res) => {
    const items = await ItemsService.getAllItems();
    res.send({
      view: 'Admin view',
      items
    });
  },
  createView:  (req, res) => res.send('Create View Route'),
  createItem:  async (req, res) => {
    const item = req.body;
    const result = await ItemsService.create([Object.values(item)]);
    res.send(result);
  },
  bulkCreate:  async (req, res) => {
    const items = req.body;
    const result = await ItemsService.create(items.map(el => Object.values(el)));
    res.send(result);
  },
  editView:  async (req, res) => {
    const id = req.params.id;
    const item = await ItemsService.getItem(id);
    res.send({
      view: 'Edit view',
      item
    });
  },
  editItem:  async (req, res) => {
    const id = req.params.id;
    const item = req.body;
    const result = await ItemsService.edit(item, id);
    res.send(result);
  },
  deleteItem:  async (req, res) => {
    const id = req.params.id;
    const result = await ItemsService.delete(id);
    res.send(result);
  },
  loginView:  (req, res) => res.send('Login View Route'),
  loginUser:  (req, res) => res.send('Login Route that receive the data when user click login button'),
  registerView:  (req, res) => res.send('Register View Route'),
  registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button'),
};