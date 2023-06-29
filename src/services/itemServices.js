const ItemModel = require('../models/itemModel');

const getAllItems = async () => {
  return await ItemModel.getAll();
}

const getItem = async (id) => {
  return await ItemModel.getOne({product_id: id});
}

const createItem = async (item) => {
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: '/imagen_front',
    image_back: '/imagen_front',
    licence_id: item.collection,
    category_id: item.category
  }
  return await ItemModel.create([Object.values(itemSchema)]);
}

const editItem = async (item, id) => {
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    image_front: '/imagen_front',
    image_back: '/imagen_front',
    licence_id: item.collection,
    category_id: item.category
  }

  return await ItemModel.edit(itemSchema, {product_id: id});
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