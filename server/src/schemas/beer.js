import mongoose from "mongoose";

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  brewery: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true
  }
});

export const BeerModel = mongoose.model("Beer", beerSchema);
