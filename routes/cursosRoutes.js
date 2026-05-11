const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const cursosController = require('../controllers/cursosController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const cleanName = file.originalname.replace(/\s+/g, '-');
        cb(null, `${timestamp}-${cleanName}`);
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

router.get('/', cursosController.index);
router.get('/create', cursosController.create);
router.post('/store', upload.single('imagen'), cursosController.store);
router.get('/edit/:id', cursosController.edit);
router.post('/update/:id', upload.single('imagen'), cursosController.update);
router.get('/delete/:id', cursosController.delete);

module.exports = router;