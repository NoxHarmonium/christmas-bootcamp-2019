import express from "express";
import bodyParser from "body-parser";
import { beerService } from "./services";
import { connectToDatabase } from "./utils/db";
import { PORT } from "./utils/constants";

const app = express();

app.use(express.static("static"));
app.use(bodyParser.json());

app.get("/beers", async (req, res) => {
  const beers = await beerService.getBeers();
  res.send({
    beers
  });
});

app.post("/beers", async (req, res) => {
  await beerService.createBeer(req.body);
  res.send({
    status: "Beer was saved! YUM"
  });
});

const start = async () => {
  await connectToDatabase();

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

start();
