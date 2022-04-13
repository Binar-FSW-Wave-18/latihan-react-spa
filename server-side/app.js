const express = require('express');
const app = express();
const routes = require('./routes');
const passport = require('./lib/passport');
const errorHandler = require('./middlewares/errorHandler');
const port = 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes);
app.use(passport.initialize());
app.use(errorHandler);


app.listen(port, (req, res) => {
    console.log(`App is running well on port ${port}`);
});