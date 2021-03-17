const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/chatt');

dotenv.config();

app.set('view engine', 'ejs');

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('Database ready');
  }
);

//Middleware
app.use(express.json());

//Route Middelwares
app.use('/api/user/', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => {
  console.log('Server listening');
});
