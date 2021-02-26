const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const admin = require('../controllers/admin');
router.post('/login',admin.login);
router.get('/events',admin.get_events);
router.use('/',admin.get_events_attendee);
module.exports = router;
