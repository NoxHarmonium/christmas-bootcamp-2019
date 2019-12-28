import express from "express";
import bodyParser from "body-parser";
import { beerService } from "./services";
import { connectToDatabase } from "./utils/db";
import { PORT } from "./utils/constants";

const app = express();

app.use(express.static("static"));
app.use(bodyParser.json());

app.get("/beers", async (req, res) => {
  // TODO: Use this try/catch pattern with the other handlers
  // It makes sure that if any errors occur they will be logged properly
  // rather than the request just hanging
  try {
    const beers = await beerService.getBeers();
    res.send({
      beers
    });
  } catch (e) {
    next(e);
  }
});

app.post("/beers", async (req, res) => {
  try {
    await beerService.createBeer(req.body);
    res.send({
      status: "Beer was saved! YUM"
    });
  } catch (e) {
    next(e);
  }
});
app.put("/beers/:id", async (req, res) => {
  try {
    await beerService.editBeer(req.params.id, req.body);
    res.send({
      status: "Beer was updated! YUM"
    });
  } catch (e) {
    next(e);
  }
});

const start = async () => {
  await connectToDatabase();

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

start();
