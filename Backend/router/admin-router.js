const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const admin_login = require('../controllers/admin');
router.post('/login',admin_login.login);
