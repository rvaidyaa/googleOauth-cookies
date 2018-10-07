const cookieSession = require('cookie-session');
const passport = require('passport');
const express = require("express");
//node js doesnt have support for es 15 module so we dont use : import express from 'express';
const mongoose = require("mongoose");
//const passportConfig = require('./services/passport')
// because this isnt being executed (therefore passportConfig has no value )we can reduce it to just a require statement
require("./models/user");
require("./services/passport");
//MissingSchemaError: Schema hasn't been registered for model "users".
// this is because we are attempting to make use of a user model (inside passport.js ) before we have actually defined it

// const authRoutes =  require('./routes/authRoutes')  isnt needed, see line 26,
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();

//takes the cookie and assigns it to req.session
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
// was authRoutes(app) originally see line 8

const PORT = process.env.PORT || 5000;
app.listen(PORT); //listens on localhost:5000 or heroku env port
// express tells node, hey watch anything coming to port 5000
