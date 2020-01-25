require('dotenv').config();

const express = require("express");
// const path =require("path");
const PORT = process.env.PORT ||3001;

// require('./auth/jwt')();

const app =express();
const passport = require('passport');
const mongoose = require("mongoose");
const routes = require("./routes");
// const axios = require("axios");

//Stripe Payment//  
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_API_KEY)
app.use(require("body-parser").text());



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
//   API routes 

//Stripe Payment/
app.post("/api/charge", async (req, res) => {
  console.log(req.body)
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.total,
      currency: "usd",
      description: "Gruber Purchase",
      source: req.body.stripeTokenId,
      receipt_email:"lionheartofdacity@gmail.com",
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});
//End Stripe Payment//



app.use(routes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });


// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  