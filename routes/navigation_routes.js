const express = require('express');
const router = express.Router();
const { getNavigationBar, getNavigationInfo } = require('../controllers/navigation_controller.js');

router.get('/data', getNavigationInfo);
router.get('/', getNavigationBar);

module.exports = router;