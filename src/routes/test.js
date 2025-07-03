const express = require('express');
const router = express.Router();

router.get('/limited', (req, res) => {
  res.send('Limited, don\'t over use me!');
});

router.get('/unlimited', (req, res) => {
  res.send('Unlimited! Let\'s Go!');
});

module.exports = router;
