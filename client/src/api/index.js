import axios from "axios";
import { BeerApi } from "./beers";

const baseUrl = process.env.REACT_APP_BASE_URL || "/";

const apiClient = new axios.create({
  baseURL: baseUrl
});

export const beerApi = new BeerApi(apiClient);
