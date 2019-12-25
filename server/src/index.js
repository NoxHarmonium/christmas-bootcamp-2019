import express from "express";
import mongoose from "mongoose";
import { cleanEnv, str } from "envalid";
import { BeerModel } from "./schemas/beer.js";

const app = express();
const port = 3000;

const { DB_PASSWORD, DB_HOST, DB_NAME } = cleanEnv(process.env, {
  DB_PASSWORD: str(),
  DB_HOST: str(),
  DB_NAME: str()
});

app.get("/beers", async (req, res) => {
  const beers = await BeerModel.find({});
  res.send({
    beers
  });
});

const start = async () => {
  await mongoose.connect(
    `mongodb+srv://dbUser:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  app.listen(port, () => console.log(`Server listening on port ${port}!`));
};

start();
