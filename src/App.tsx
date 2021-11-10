import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BeersList } from "./component/BeersList";

import { usePopper } from "react-popper";
import { BEER_API } from "./lib/api";

import { Beer } from "./lib/types";
import { Card } from "./UIElement/Card";
import OutsideClickHandler from "react-outside-click-handler";

function App() {
  //const beers = useApi();
  const [beers, setBeers] = useState<Beer[]>([]);
  const [cart, setCart] = useState<Beer[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );
  const hide = () => setShow(false);

  function handleDropdownClick(e: any) {
    e.preventDefault();
    setShow(true);
  }

  useEffect(() => {
    fetch(BEER_API)
      .then((res) => res.json())
      .then((response) => setBeers(response))
      .catch((error) => console.error(error));
  }, []);

  const filteredBeers = useMemo(() => {
    const newBeers: Beer[] = [];
    const filter = filterText.trim().toLowerCase();

    for (const beerList of beers) {
      if (filter === "") {
        newBeers.push(beerList);
      } else if (beerList.name.toLowerCase().indexOf(filter) !== -1) {
        newBeers.push(beerList);
      }
    }
    console.log("beers", newBeers);
    return newBeers;
  }, [filterText, beers]);

  const handleAddToCart = useCallback((beer: Beer) => {
    setCart((prev) => [...prev, beer]);
  }, []);

  console.log("CART", cart);

  // should show beer with the filter text
  console.log("filter", filteredBeers);

  return (
    // <CartStateProvider>
    <div className="flex flex-row">
      <div className="mx-8">
        <div>
          <div className="w-full text-center my-8 flex flex-row justify-center items-center">
            <input
              className="border border-grey-970 py-2 px-4 w-96 rounded-full  outline-none  focus:outline-none focus:ring-2 focus:ring-grey-475 focus:border-transparent"
              placeholder="Search for beer"
              type="text"
              value={filterText}
              onChange={(event) => setFilterText(event.target.value)}
            />
            <div>
              <OutsideClickHandler onOutsideClick={hide}>
                <button
                  className="ml-4 text-white"
                  ref={referenceRef}
                  onClick={handleDropdownClick}
                >
                  My cart
                </button>
              </OutsideClickHandler>
              {show ? (
                <Card>
                  <div
                    ref={popperRef}
                    style={styles.popper}
                    {...attributes.popper}
                    className="bg-white p-4"
                  >
                    <OutsideClickHandler onOutsideClick={hide}>
                      {cart.map((item) => (
                        <p className="text-black" key={item.id}>
                          {item.tagline}
                        </p>
                      ))}
                    </OutsideClickHandler>
                  </div>
                </Card>
              ) : null}
            </div>
          </div>
        </div>
        <BeersList beers={filteredBeers} addToCart={handleAddToCart} />
      </div>
    </div>
    // </CartStateProvider>
  );
}

export default App;
