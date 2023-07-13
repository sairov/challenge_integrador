const express = require('express');
const router = express.Router();

const {
  homeView,
  contactView,
  aboutView,
  faqsView,
} = require('../controllers/mainControllers');

router.get('/', (req, res, next) => {

  req.session.logs = req.session.logs ? ++req.session.logs : 1;
  console.log(req.session.logs);

  next();
}, homeView);
router.get('/contact', contactView);
router.get('/about', aboutView);
router.get('/faqs', faqsView);

module.exports = router;