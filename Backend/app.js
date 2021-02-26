const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const event_router =require('../Backend/router/event_routes');
const attendee_router =require('../Backend/router/attendee_router');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/newevents',event_router );
app.use('/api/newattendee',attendee_router );

app.listen(process.env.PORT || 5000);