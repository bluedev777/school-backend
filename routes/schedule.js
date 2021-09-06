var express = require('express');
var router = express.Router();
var scheduleController = require('../controllers/scheduleController');
var schedule = new scheduleController();

router.get('/', schedule.getSchedules);
module.exports = router;