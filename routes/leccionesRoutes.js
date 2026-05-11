const express = require('express');
const router = express.Router();

const leccionesController = require('../controllers/leccionesController');

router.get('/', leccionesController.index);

router.get('/create', leccionesController.create);

router.post('/store', leccionesController.store);
router.get('/edit/:id', leccionesController.edit);

router.post('/update/:id', leccionesController.update);

router.get('/delete/:id', leccionesController.delete);

module.exports = router;