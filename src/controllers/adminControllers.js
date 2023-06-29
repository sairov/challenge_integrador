const ItemsService = require('../services/itemServices');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');

module.exports = {
  adminView: async (req, res) => {
    const { data } = await ItemsService.getAllItems();
    res.render( './admin/admin',
    {
      view: {
        title: 'List of Products | Admin Funkoshop'
      },
      items: data
    });
  },
  createView:  async (req, res) =>{

    res.render('./admin/create', {
      view: {
        title: 'Create Product | Admin Funkoshop'
      }
    });
  },
  createItem:  async (req, res) => {
    const item = req.body;
    await ItemsService.create(item);
    res.redirect('/admin');
  },
  bulkCreate:  async (req, res) => {
    const items = req.body;
    const result = await ItemsService.create(items.map(el => Object.values(el)));
    res.send(result);
  },
  editView:  async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await CategoryService.getAllItemsCategories();
    const { data: licences } = await LicenceService.getAllItemsLicences();
    const { data } = await ItemsService.getItem(id);
    console.log(categories, licences);
    res.render('./admin/edit', {
      view: {
        title: `Edit Product #${id} | Admin Funkoshop`
      },
      item: data[0],
      categories,
      licences
    });
  },
  editItem:  async (req, res) => {
    const id = req.params.id;
    const item = req.body;

    await ItemsService.edit(item, id);
    res.redirect('/admin');
  },
  deleteItem:  async (req, res) => {
    const id = req.params.id;

    await ItemsService.delete(id);
    res.redirect('/admin');
  },
  loginView:  (req, res) => res.render('./auth/login', {
    view: {
      title: 'Login | Funkoshop'
    }
  }),
  loginUser:  (req, res) => res.send('Login Route that receive the data when user click login button'),
  registerView:  (req, res) => res.render('./auth/register', {
    view: {
      title: 'Register | Funkoshop'
    }
  }),
  registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button'),
};