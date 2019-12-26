import express from "express";
import { beerService } from "./services";
import { connectToDatabase } from "./utils/db";
import { PORT } from "./utils/constants";

const app = express();

app.use(express.static("static"));

app.get("/beers", async (req, res) => {
  const beers = await beerService.getBeers();
  res.send({
    beers
  });
});

const start = async () => {
  await connectToDatabase();

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

start();
