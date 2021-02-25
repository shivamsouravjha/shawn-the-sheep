const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const add_attendee = async(req,res,next)=>{
    const { attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address } =req.body;
    try{
        const new_attendee= await pool.query(
            "INSERT INTO events_db(attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address]
        );
        console.log('success');
        res.json(new_attendee);
    }catch(err)
    {
        const error = new Erur(
            'attendee entry halted',
            422
          );
          return next(error);
    }
};

exports.add_attendee=add_attendee;