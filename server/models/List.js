const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
  },
  { timestamps: true }
);
module.exports = mongoose.model("List",ListSchema) // it's take two agument 1st is model name and schema reference 