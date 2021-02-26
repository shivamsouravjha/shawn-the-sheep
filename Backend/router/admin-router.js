const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const admin = require('../controllers/admin');
router.post('/login',admin.login);
router.use('/',admin.getevents);
module.exports = router;
