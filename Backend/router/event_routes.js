const express = require('express');
const router = express.Router();
const event_controller =require('../controllers/event_controller');
router.post('/',event_controller.add_event);
router.delete('/',event_controller.delete_event);

module.exports = router;
