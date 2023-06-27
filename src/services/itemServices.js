const ItemModel = require('../models/itemModel');

const getAllItems = async () => {
  return await ItemModel.getAll();
}

const getItem = async (id) => {
  return await ItemModel.getOne({product_id: id});
}

const createItem = async (item) => {
  return await ItemModel.create(item);
}

const editItem = async (item, id) => {
  return await ItemModel.edit(item, {product_id: id});
}

const deleteItem = async (id) => {
  return await ItemModel.delete({product_id: id});
}

module.exports = {
  getAllItems,
  getItem,
  create: createItem,
  edit: editItem,
  delete: deleteItem
}