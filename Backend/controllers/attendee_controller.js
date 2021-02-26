const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const add_attendee = async(req,res,next)=>{
    const { attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address,events_id } =req.body;
    try{
        const new_event= await pool.query(
            "INSERT INTO attendee_DB(attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address) VALUES($1,$2,$3,$4,$5) RETURNING * ",
            [attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address]
        );
        console.log(new_event.rows[0].attendee_id);
        const new_event_attendee= await pool.query(
            "INSERT INTO event_attendee_DB(attendee_id,events_id) VALUES($1,$2) RETURNING * ",
            [1,2]
        );
        res.json(new_event_attendee);
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

exports.add_attendee=add_attendee;



