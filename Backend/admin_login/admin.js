const Erur = require('../models/error');
const { validationResult } = require('express-validator');

const login = async (req, res, next) => {
    const { username, password } = req.body;
  
    let adminexisted;
  
    try {
        adminexisted = await MemerSchema.findOne({ username: username });
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
  
    res.json({
      message: 'Logged in!',
      admin: adminexisted.toObject({ getters: true })
    });
  };
  exports.login = login;
n