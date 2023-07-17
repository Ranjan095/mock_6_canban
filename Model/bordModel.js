/** @format */

let mongoose = require("mongoose");

let bordSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false }
);

let BordModal = mongoose.model("bord", bordSchema);

module.exports = { BordModal };
