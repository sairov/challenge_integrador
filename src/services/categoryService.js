const CategoryModel = require('../models/categoryModel');

const getAllItemsCategories = async () => {
  return await CategoryModel.getAll();
}

module.exports = {
  getAllItemsCategories,
}