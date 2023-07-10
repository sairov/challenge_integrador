const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const {
  loginView,
  loginUser,
  registerView,
  registerUser,
  logoutUser
} = require('../controllers/authControllers');

const loginValidation = [
  body('email')
  .isEmail()
  .withMessage('Necesito que ingrese un correo válido'),
  body('password')
   .isLength({ min: 6})
   .isAlphanumeric()
   .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
];

router.get('/login', loginView);
router.post('/login', loginValidation, validateInput, loginUser);
router.get('/register', registerView);
router.post('/register', registerUser);
router.get('/logout', logoutUser);

module.exports = router;