import { Beer } from "../lib/types";
import { Card } from "../UIElement/Card";

interface IBeerListProp {
  beer: Beer;
}
export const BeerList = ({ beer }: IBeerListProp) => {
  return (
    <Card className="p-8 mb-12 w-p546">
      <div className="flex flex-row justify-between content-center">
        <div className="self-center">
          <img src={beer.image_url!} alt={beer.name} className="w-20" />
        </div>
        <div className="ml-8 w-max-10 w-2/3 content-center">
          <p className="mb-2 font-bold">{beer.name}</p>
          <p className="mb-2 font-bold">{beer.tagline}</p>
          <p className="">{beer.description}</p>
        </div>
      </div>
    </Card>
  );
};
