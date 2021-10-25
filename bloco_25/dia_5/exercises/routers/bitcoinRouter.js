const express = require('express');
const router = express.Router();
const { validateToken } = require('../middlewares/validations');

router.get('/price', validateToken, async (req, res) => {
  const content = await fetch(' https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.json('content');
});

module.exports = router;
