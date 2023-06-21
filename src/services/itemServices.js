const { getAll, getOne } = require('../models/itemModel');

const getAllItems = async () => {
  return await getAll();
}

const getItem = async (id) => {
  return await getOne({product_id: id});
}

module.exports = {
  getAllItems,
  getItem
}