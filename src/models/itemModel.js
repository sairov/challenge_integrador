const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT * FROM product;');
    return rows;
  } catch (error) {
    throw error;
  }
}

const getOne = async (params) => {
  try {
    const [rows] = await conn.query('SELECT * FROM product WHERE ?;', params);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAll,
  getOne
};