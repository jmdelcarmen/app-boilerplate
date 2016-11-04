const express = require('express');
const router = express.Router();
const User = require('../models/model01');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to myapp' });
});


////////////////////////////////////////
//Uncomment to see if DB is connected//
///////////////////////////////////////
// let someone = new User({name: "marco"});
// someone.save();
//
// User.find({someone}, (e, data) => {
//   console.log(data);
// });

module.exports = router;
