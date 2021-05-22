const express = require('express');
const router = express.Router();
const Coursecontroller = require('../app/controllers/CourseController');
// newcontroller.index();
router.get('/:slug', Coursecontroller.show);
module.exports = router;
