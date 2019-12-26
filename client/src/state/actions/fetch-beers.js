import { beerApi } from "../../api";

export const FETCH_BEERS = "FETCH_BEERS";
export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS";
export const FETCH_BEERS_FAILURE = "FETCH_BEERS_FAILURE";

const fetchBeers = beers => {
  return {
    type: FETCH_BEERS
  };
};

const fetchBeersSuccess = beers => {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: beers
  };
};

const fetchBeersFailure = error => {
  return {
    type: FETCH_BEERS_FAILURE,
    payload: error
  };
};

export const fetchBeersAsync = () => {
  return async dispatch => {
    dispatch(fetchBeers());
    try {
      console.log("Fetching beers...");
      const { data } = await beerApi.getBeers();
      dispatch(fetchBeersSuccess(data.beers));
    } catch (e) {
      dispatch(fetchBeersFailure(e));
    }
  };
};
