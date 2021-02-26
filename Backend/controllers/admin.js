const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const login = async (req, res, next) => {
  const { username, password } = req.body;

  let adminexisted;
  
  try {
     // adminexisted = await .findOne({ username: username });
  } catch (err) {
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!adminexisted || adminexisted.password !== password) {
    const error = new Erur(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }
};
const get_events_attendee = async (req, res, next) => {
  const { events_id } = req.body;  
  try {
      const new_event= await pool.query(
        "SELECT * FROM event_attendee_DB RIGHT JOIN attendee_DB ON event_attendee_DB.attendee_id = attendee_DB.attendee_id WHERE  event_attendee_DB.events_id = ($1) ",
        [events_id]
    );
    console.log('w');
    res.json(new_event);

  } catch (err) {
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }

};
const get_events = async (req, res, next) => {
  const { events_id } = req.body;  
  try {
      const new_event= await pool.query(
        "SELECT * FROM event_attendee_DB RIGHT JOIN attendee_DB ON event_attendee_DB.attendee_id = attendee_DB.attendee_id WHERE  event_attendee_DB.events_id = ($1) ",
        [events_id]
    );
    console.log(new_event);
    res.json(new_event);

  } catch (err) {
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }

};
exports.login = login;
exports.get_events_attendee = get_events_attendee;
exports.get_events = get_events;