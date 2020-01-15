const groceryController = require("../../controllers/groceryController");


const router = require("express").Router();

const passport = require('passport');

const protectedRoutes = require("./protected/");
const authRoutes = require("./auth");



// Food routes

// router.route('/food').get(groceryController.findAll)
router.route('/food').get(groceryController.findAllEveryone)

// router.route
router.use("/auth", authRoutes);
router.use("/protected", passport.authenticate('jwt', { session: false }), protectedRoutes);
module.exports = router;
