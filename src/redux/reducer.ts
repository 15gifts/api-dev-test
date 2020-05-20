import { AnyAction } from "redux";
import { INITIAL_STATE, InitialStateProps } from "./model";
import { getBeers } from "../services/ApiService";

const UPDATE_BEERS_LIST = "UPDATE_BEERS_LIST";

export default function reducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case UPDATE_BEERS_LIST:
      return {
        beersList: {
          ...action.payload,
        }
      };
    default:
      return state;
  }
}

export const setBeersList = () => {
  const list = getBeers();
  return {
    type: UPDATE_BEERS_LIST,
    payload: { list },
  };
};
