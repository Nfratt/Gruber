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
    category: "Snacks",
    image:"https://target.scene7.com/is/image/Target/GUEST_db92f8c5-1113-48ee-a5a4-d4a03788632b"

 
  },
  {
    itemName: "Carrots",
    price: "3.99",
    description: "A root vegetable, native to Europe and Southwestern Asia.",
    category: "Produce",
    image:"https://www.tasteofhome.com/wp-content/uploads/2019/01/carrots-shutterstock_789443206-800x450.jpg"

  },
  {
    itemName: "Coca Cola six pack of cans",
    price: "6.99",
    description: "A soft drink.",
    category: "Soda",
    image:"https://www.meijer.com/content/dam/meijer/product/0004/90/0006/10/0004900006101_1_A1C1_1200.png"

  },

  {
    itemName: "Shrimp",
    price: "24.99",
    description: "a crustation that swims through the sea  (please note:common allergy)",
    category: "Seafood",
    image:"https://s3.amazonaws.com/cdn.legalseafoods.com/images/recipes/8.jpg"

  },
  {
    itemName: "Sweet potato",
    price: "5.00",
    description: "is a dicotyledonous plant that belongs to the bindweed or morning glory family, Its large, starchy, sweet-tasting, tuberous roots are a root vegetable.",
    category: "Produce",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqOF5TQtHWcS_sjsi2byPTp7x3rQ4B3-Vhq-uKuoijFzcSgc2i&s"

  },

];

async function seed() {
  try {
    // clear DB
    console.log('Start');
    
    await db.Food.deleteMany({});
    await db.User.deleteMany({});
    
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

    // add demo food to DB
    const foodSeedOp = await db.Food.collection.insertMany(foodSeed);
    console.log(`Inserted ${foodSeedOp.result.n} foods.`);

    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
