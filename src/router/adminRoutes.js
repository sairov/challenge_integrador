const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/login');

const controllers = require('../controllers/adminControllers');

router.use(isLogged);

router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', uploadFiles.array('images', 2), controllers.createItem);
router.post('/create/bulk', controllers.bulkCreate);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);

module.exports = router;