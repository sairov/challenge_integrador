const { getAllItems, getItem } = require('../services/itemServices');

module.exports = {
  adminView: async (req, res) => {
    const items = await getAllItems();
    res.send(items);
  },
  createView:  (req, res) => res.send('Create View Route'),
  createItem:  (req, res) => res.send('Create Route that receive a new item data to add in Database'),
  editView:  async (req, res) => {
    const item = await getItem(req.params.id);
    res.send(item);
  },
  editItem:  (req, res) => res.send('Edit Route that receive data to modify an item in Database'),
  deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
  loginView:  (req, res) => res.send('Login View Route'),
  loginUser:  (req, res) => res.send('Login Route that receive the data when user click login button'),
  registerView:  (req, res) => res.send('Register View Route'),
  registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button'),
};