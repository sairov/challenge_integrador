const LicenceModel = require('../models/licenceModel');

const getAllItemsLicences = async () => {
  return await LicenceModel.getAll();
}

module.exports = {
  getAllItemsLicences,
}