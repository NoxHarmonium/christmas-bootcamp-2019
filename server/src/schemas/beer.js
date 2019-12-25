import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// E.g.
// {
//     brewery: "Colangial",
//     name: "Hazy IPA",
//     rating: 4.2
// }

const BeerSchema = new Schema({
  brewery: String,
  name: String,
  rating: Number
});

export const BeerModel = mongoose.model('Beer', BeerSchema);