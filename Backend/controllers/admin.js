const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const login = async(req,res,next)=>{
  const { admin_name,events_id } =req.body;
  try{
      const new_event= await pool.query(
          "INSERT INTO attendee_DB(attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address) VALUES($1,$2,$3,$4,$5) RETURNING * ",
          [admin_name,attendee_Address]
      );
      console.log(new_event.rows[0].attendee_id);
      res.json(new_event_attendee);
  }catch(err)
  {
      const error = new Erur(
          'event entry halted',
          422
        );
        return next(error);
  }
};

const get_events_attendee = async (req, res, next) => {
  const { events_id } = req.body;
  let new_event;  
  try {
       new_event= await pool.query(
        "SELECT * FROM event_attendee_DB RIGHT JOIN attendee_DB ON event_attendee_DB.attendee_id = attendee_DB.attendee_id WHERE  event_attendee_DB.events_id = ($1) ",
        [events_id]
    );
    console.log('w');
  } catch (err) {
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ new_event: new_event.map(user => user.toObject({ getters: true })) });
  console.log({ new_event: new_event.map(user => user.toObject({ getters: true })) });

};
const get_events = async (req, res, next) => {
  try {
      const new_event= await pool.query(
        "SELECT * FROM events_db ",
    );
    console.log('1');

    res.json(new_event.rows);
  
  } catch (err) {
    const error = new Erur(
      'watching events failed, please try again later.',
      500
    );
    return next(error);
  }

};
exports.login = login;
exports.get_events_attendee = get_events_attendee;
exports.get_events = get_events;