import {
  FETCH_BEERS,
  FETCH_BEERS_SUCCESS,
  FETCH_BEERS_FAILURE
} from "./actions/fetch-beers";

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
    default:
      return state;
  }
};
