const express = require('express');
const router = express.Router();
const Sitecontroller = require('../app/controllers/SiteController');
// Siteontroller.index();
router.use('/search', Sitecontroller.Search);
router.use('/', Sitecontroller.index);
module.exports = router;