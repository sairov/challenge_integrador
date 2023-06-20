const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => res.send('Home View Route'));
router.get('/contact', (req, res) => res.send('Contact View Route'));
router.get('/about', (req, res) => res.send('About View Route'));
router.get('/faqs', (req, res) => res.send('FAQs View Route'));

module.exports = router;