module.exports = {
  adminView: (req, res) => res.send('Admin View Route'),
  createView:  (req, res) => res.send('Create View Route'),
  createItem:  (req, res) => res.send('Create Route that receive a new item data to add in Database'),
  editView:  (req, res) => res.send('Edit View Route'),
  editItem:  (req, res) => res.send('Edit Route that receive data to modify an item in Database'),
  deleteView:  (req, res) => res.send('Delete View Route'),
  deleteItem:  (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'),
  loginView:  (req, res) => res.send('Login View Route'),
  loginUser:  (req, res) => res.send('Login Route that receive the data when user click login button'),
  registerView:  (req, res) => res.send('Register View Route'),
  registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button'),
};