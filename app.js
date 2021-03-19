const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const event_router =require('./router/event_routes');
const attendee_router =require('./router/attendee_router');
const admin =require('./router/admin-router');
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"frontend/build")));
if(process.env.NODE_END==="production"){
    app.use(express.static(path.join(__dirname,"frontend/build")));
}
app.use('/api/newevents',event_router );
app.use('/api/newattendee',attendee_router );
app.use('/api/admin',admin );
app.listen(process.env.PORT || 5000);