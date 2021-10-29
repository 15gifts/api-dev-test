
import { Beer } from "../lib/types";
import { BeerList } from "./BeerList";

interface IBeersProps {
  beers: Beer[];
}
export const compareName = (beerA: Beer, beerB: Beer) => {
  const a = beerA.name.toLowerCase();
  const b = beerB.name.toLowerCase();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const Beers = ({ beers }: IBeersProps) => {
  return (
    <div className="flex flex-wrap justify-between">
      {beers.length === 0
        ? "sorry could not find what you were looking for"
        : beers
            .sort(compareName)
            .map((beer) => <BeerList key={beer.id} beer={beer} />)}
    </div>
  );
};
