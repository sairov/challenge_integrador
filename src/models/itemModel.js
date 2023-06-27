const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const getOne = async (params) => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.category_id = licence.licence_id WHERE ?;', params);
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const create = async (params) => {
  try {
    const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const edit = async (params, id) => {
  try {
    console.log(params);
    console.log(id);
    const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
    console.log(rows);
    const response = {
      isError: false,
      message: `El item fue modificado exitosamente.`
    };

    return response;
  } catch (e) {
    console.log(e);
    const error = {
      isError: true,
      message: `No pudimos modificar el item seleccionado, error: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const deleteOne = async (params) => {
  try {
    const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
    const response = {
      isError: false,
      data: rows,
      message: `Item borrado exitosamente.`
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos insertar los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  delete: deleteOne
};