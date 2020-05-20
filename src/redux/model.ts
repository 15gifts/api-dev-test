export interface SingleBeerProps {
  beer: {
    url: string;
    title: string;
    subTitle: string;
  };
}

export interface InitialStateProps {
  beersList: SingleBeerProps[];
}

export const INITIAL_STATE: InitialStateProps = {
  beersList: [],
};
