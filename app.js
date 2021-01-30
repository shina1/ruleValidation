const express = require('express');

const userRoute = require('./routes/userRoute');

console.log(userRoute);

const app = express();
//------------------- middleware functions ------------------
app.use(express.json());

app.use(express.static(`${__dirname}/public`));


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


/**
 * Routes
 */

 app.use('/api/v1/user', userRoute);




 module.exports = app;