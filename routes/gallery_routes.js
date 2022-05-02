const express = require('express');
const router = express.Router();
const multer = require('multer');

/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });*/

const { getGalleryView, getAllPosters, addPoster } = require('../controllers/gallery_controller.js');

router.get('/', getGalleryView);
router.get('/data', getAllPosters);
// router.post('/add', upload.single('image'), addFlower);

module.exports = router;