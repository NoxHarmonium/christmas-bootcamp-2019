import {
  FETCH_BEERS,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE
} from "./actions/fetch-beers";

import {
  POST_BEER,
  POST_BEER_SUCCESS,
  POST_BEER_FAILURE
} from "./actions/post-beer";

export default (
  state = { error: undefined, beers: undefined, loading: false },
  action
) => {
  switch (action.type) {
    case FETCH_BEERS:
      return {
        error: undefined,
        loading: true
      };
    case FETCH_BEERS_SUCCESS:
      return {
        beers: action.payload,
        error: undefined,
        loading: false
      };
    case FETCH_BEERS_FAILURE:
      return {
        beers: undefined,
        error: action.payload,
        loading: false
      };
    case POST_BEER:
      return {
        error: undefined,
        loading: true
      };
    case POST_BEER_SUCCESS:
      return {
        error: undefined,
        loading: false
      };
    case POST_BEER_FAILURE:
      return {
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
