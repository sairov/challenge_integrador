const { validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      res.status(400).send({errors: errors.array()});
  }

  next();
};

module.exports = validateInput;