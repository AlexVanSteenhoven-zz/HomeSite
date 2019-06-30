// Import express
const express = require('express');
const router = express.Router();

// login route
router.get('/login', (req, res) => {
  res.status(200);
  res.render('pages/login');
});

// register route
router.get('/register', (req, res) => {
  res.status(200);
  res.render('pages/register');
});

module.exports = router;
