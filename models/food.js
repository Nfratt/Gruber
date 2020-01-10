const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: String, required: true },
  // user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
});

const Food = mongoose.model("Grocery", grocerySchema);

module.exports = Food;
