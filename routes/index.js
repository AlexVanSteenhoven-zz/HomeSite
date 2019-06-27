// Import express
const express = require('express');
const router = express.Router();

// root route
router.get('/', (req, res) => {
  res.status(200);
  res.render('index');
});

module.exports = router;
