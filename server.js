const express = require("express");
// const path =require("path");
const PORT = process.env.PORT ||5001;

// require('./auth/jwt')();

const app =express();
const passport = require('passport');
const mongoose = require("mongoose");
const routes = require("./routes");
// const axios = require("axios");





app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
//   API routes 

app.use(routes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });


// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connect('mongodb://localhost/Grocery', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  