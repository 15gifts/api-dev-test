

import { Beer } from "../lib/types";
import { Card } from "../UIElement/Card";

interface IBeerProductProp {
  beer: Beer;
  handleAddToCart: (beer: Beer) => void;
}
export const BeerProduct = ({ beer, handleAddToCart }: IBeerProductProp) => {
  return (
    <Card className="p-8 mb-12 w-p546">
      <div className="flex flex-row justify-between content-center">
        <div className="self-center">
          <img src={beer.image_url!} alt={beer.name} className="w-20" />
        </div>
        <div className="ml-8 w-max-10 w-2/3 content-center">
          <p className="mb-2 font-bold">{beer.name}</p>
          <p className="mb-2 font-bold">{beer.tagline}</p>
          <p className="mb-6">{beer.description}</p>
          <button
            className="bg-indigo-900 p-2 rounded-full px-4 text-white"
            type="button"
            onClick={() => handleAddToCart(beer)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Card>
  );
};
