const express = require('express');
const TokenBucket = require('../algorithms/tokenBucket.js');
const tokenBuckets = require('../db.js');

const router = express.Router();

router.get('/limited', (req, res) => {
  const ip = req.ip;

  if (!tokenBuckets[ip]) {
    tokenBuckets[ip] = new TokenBucket();
  }

  const tokenBucket = tokenBuckets[ip];
  if (!tokenBucket.consume()) {
    // Too many requests
    res.sendStatus(429);
  } else {
    res.send('Limited, don\'t over use me!');
  }
});

router.get('/unlimited', (req, res) => {
  res.send('Unlimited! Let\'s Go!');
});

module.exports = router;
