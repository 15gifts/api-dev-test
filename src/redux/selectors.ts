import { InitialStateProps } from "./model";

const selectBeersList = (state: InitialStateProps) => {
  return (state && state.beersList) || [];
};

export default {
  selectBeersList,
};
