const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const event_router =require('../Backend/router/event_routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/newevents',event_router );

app.listen(process.env.PORT || 5000);