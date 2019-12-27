import { beerApi } from "../../api";
import { fetchBeersAsync } from "./fetch-beers";

export const POST_BEER = "POST_BEER";
export const POST_BEER_SUCCESS = "POST_BEER_SUCCESS";
export const POST_BEER_FAILURE = "POST_BEER_FAILURE";

const postBeer = () => {
  return {
    type: POST_BEER
  };
};

const postBeerSuccess = () => {
  return {
    type: POST_BEER_SUCCESS
  };
};

const postBeerFailure = error => {
  return {
    type: POST_BEER_FAILURE,
    payload: error
  };
};

export const postBeerAsync = beer => {
  return async dispatch => {
    dispatch(postBeer());
    try {
      console.log("Posting beer...");
      await beerApi.postBeer(beer);
      dispatch(postBeerSuccess());
    } catch (e) {
      dispatch(postBeerFailure(e));
    }
    dispatch(fetchBeersAsync());
  };
};
