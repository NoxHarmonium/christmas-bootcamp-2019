import { beerModel } from "../schemas/beer.js";
import { BeerService } from "./beer-service.js";

export const beerService = new BeerService(beerModel);
