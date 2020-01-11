require('dotenv').config();
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const db = require("../models");

// This file empties the Book and User collections and inserts the seeds below

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connect('mongodb://localhost/Grocery', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const demoUserSeed = [
  {
    role: "user",
    firstName: "Demo",
    lastName: "One",
    email: "demo1@email.com",
    username: 'demo1',
    passwordHash: 'abcdefgh'
  },
  {
    role: "user",
    firstName: "Demo",
    lastName: "Two",
    email: "demo2@email.com",
    username: 'demo2',
    passwordHash: 'abcdefg'
  }
]


const foodSeed = [
  {
    itemName: "Peanut Butter",
    price: "5.00",
    description: "A food spread made from ground dry-roasted peanuts.",
    category: "Snacks"

 
  },
  {
    itemName: "Carrots",
    price: "3.99",
    description: "A root vegetable, native to Europe and Southwestern Asia.",
    category: "Produce"

  },
  {
    itemName: "Coca Cola six pack of cans",
    price: "6.99",
    description: "A soft drink.",
    category: "Soda"

  },


];

async function seed() {
  try {
    // clear DB
    console.log('Start');
    
    await db.Food.remove({});
    await db.User.remove({});
    
    // add demo users
    const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS, 10);
    const password = process.env.SEED_USER_PASSWORD;
    await Promise.all(demoUserSeed.map(async (it) => {
      it.passwordHash = await bcrypt.hash(password, saltRounds);
      return;
    }));

    const userSeedOp = await db.User.collection.insertMany(demoUserSeed);
    
    // put demoUser's ID on each book
    foodSeed.forEach((it, idx) => it.user = userSeedOp.insertedIds[idx % 2]);

    // add demo books to DB
    const foodSeedOp = await db.Food.collection.insertMany(foodSeed);
    console.log(`Inserted ${foodSeedOp.result.n} foods.`);

    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
