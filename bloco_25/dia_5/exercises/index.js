const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { validateToken } = require('./middlewares/validations');

const useRouter = require('./routers/userRouter');
const btcRouter = require('./routers/bitcoinRouter');
const PORT = 3001;
const END_POINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', useRouter);
app.use('/btc', btcRouter);

app.listen(PORT, () => {
  console.log('door 3001');
});
