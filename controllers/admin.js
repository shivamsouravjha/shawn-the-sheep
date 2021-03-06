const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const login = async(req,res,next)=>{
  const { admin_name,admin_password } =req.body;

  try{
      const new_event= await pool.query(
          `SELECT COUNT(*) FROM ADMIN_DB WHERE (ADMIN_DB.admin_name = $1 AND ADMIN_DB.admin_password =$2);`,
          [admin_name,admin_password]
          
      );
      console.log(new_event.rows[0].count);
      res.json(new_event.rows);
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
  //const { events_id } = req.body;
  let new_event;  
  try {
       new_event= await pool.query(
        "SELECT * FROM event_attendee_DB RIGHT JOIN attendee_DB ON event_attendee_DB.attendee_id = attendee_DB.attendee_id"
       /// "SELECT * FROM event_attendee_DB RIGHT JOIN attendee_DB ON event_attendee_DB.attendee_id = attendee_DB.attendee_id WHERE  event_attendee_DB.events_id = ($1) ",
      //  [events_id]
      ); res.json(new_event.rows);
  } catch (err) {
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }
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