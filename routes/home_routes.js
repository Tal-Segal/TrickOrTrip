const express = require('express');
const router = express.Router();


const { login } = require('../controllers/login_controller.js');
router.post('/login', login);

const { signup } = require('../controllers/signup_controller.js');
router.post('/signup', signup);


const { getHomeView, getAboutUsView, getContactView } = require('../controllers/home_controller.js');
router.get('/about_us', getAboutUsView);
router.get('/contact', getContactView);
router.get('/', getHomeView);


module.exports = router;