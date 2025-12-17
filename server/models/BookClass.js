const mongoose = require("mongoose");
const BookClassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    timings: { type: String, required: true },
    center: { type: String, required: true },
  },
  { timestamps: true }
);
const BookClass = mongoose.model("bookclass", BookClassSchema);
module.exports = BookClass;
