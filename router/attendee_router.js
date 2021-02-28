const express = require('express');
const router = express.Router();
const attendee_controller =require('../controllers/attendee_controller');
router.post('/',attendee_controller.add_attendee);
module.exports = router;
