const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const add_event = async(req,res,next)=>{
    const { event_name,event_date } =req.body;
    try{
        const new_event= await pool.query(
            "INSERT INTO events_db(event_name,event_date) VALUES($1,$2) RETURNING events_id",
            [event_name,event_date]
        );
        console.log(new_event.rows[0].events_id);
        res.json(new_event);
    }catch(err)
    {
        const error = new Erur(
            'event entry halted',
            422
          );
          return next(error);
    }
    return  ;
};

exports.add_event=add_event;