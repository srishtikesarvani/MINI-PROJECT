const { Schema, model } = require("../connection");
const myschema = new Schema({
  title: String,
  type: String,
  rent: Number,
  contact: Number,
  image: String,
  address: String,
  owner: String,
  createdAt: Date,
});
module.exports = model("roomdata", myschema);
