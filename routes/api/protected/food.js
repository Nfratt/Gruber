const router = require("express").Router();
const groceryController = require("../../../controllers/groceryController");

// Matches with "/api/protected/food"
router.route("/")
  .get(groceryController.findAll)
  .get(groceryController.findAllEveryone)
  .post(groceryController.create);

// Matches with "/api/protected/food/:id"
router.route("/:id")
  .get(groceryController.findById)
  .put(groceryController.update)
  .delete(groceryController.remove);

module.exports = router;
