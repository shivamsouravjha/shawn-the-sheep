const Erur = require('../models/error');
const { validationResult } = require('express-validator');
const pool =require("../models/db_schema");

const add_event = async(req,res,next)=>{
    const { description } =req.body;
    try{
        console.log(description);
    }catch(err)
    {
        const error = new Erur(
            'User exists already, please login instead.',
            422
          );
          return next(error);
    }
    return  ;
};

exports.add_event=add_event;