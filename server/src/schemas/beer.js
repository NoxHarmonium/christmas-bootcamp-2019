import mongoose from "mongoose";

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  brewery: String,
  name: String,
  rating: Number
});

export const beerModel = mongoose.model("Beer", beerSchema);
