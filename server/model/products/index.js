const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
  rating: { type: Number, required: true },
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  features: {
    memory: { type: String, required: true },
    processor: { type: String, required: true },
    os: { type: String, required: true },
    cpu: { type: String, required: true },
  },
  image: { type: String, required: true },
  totalReviews: { type: Number, default: 0 },
  description: { type: String, required: true },
  colors: { type: [String], required: true },
});

module.exports = mongoose.model("Products", productSchema);