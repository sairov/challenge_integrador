const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Admin View Route'));
router.get('/create', (req, res) => res.send('Create View Route'));
router.post('/create', (req, res) => res.send('Create Route that receive a new item data to add in Database'));
router.get('/edit/:id', (req, res) => res.send('Edit View Route'));
router.put('/edit/:id', (req, res) => res.send('Edit Route that receive data to modify an item in Database'));
router.get('/delete/:id', (req, res) => res.send('Delete View Route'));
router.delete('/delete/:id', (req, res) => res.send('Delete Route that receive the ID to the item to delete from database'));
router.get('/login', (req, res) => res.send('Login View Route'));
router.post('/login', (req, res) => res.send('Login Route that receive the data when user click login button'));
router.get('/register', (req, res) => res.send('Register View Route'));
router.post('/register', (req, res) => res.send('Register Route that receive the data when user click register button'));

module.exports = router;