import React, { useEffect, useMemo, useState } from "react";
import { Beers } from "./component/Beers";

import { BEER_API } from "./lib/api";

import { Beer } from "./lib/types";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  useEffect(() => {
    fetch(BEER_API)
      .then((res) => res.json())
      .then((response) => setBeers(response))
      .catch((error) => console.error(error));
  }, []);

  const filteredBeers = useMemo(() => {
    const beers: Beer[] = [];
    const filter = filterText.trim().toLowerCase();

    for (const beerList of beers) {
      if (filter === "") {
        beers.push(beerList);
      } else if (beerList.name.toLowerCase().indexOf(filter) !== -1) {
        beers.push(beerList);
      }
    }

    return beers;
  }, [filterText]);
// should show beer with the filter text 
  console.log("filter", filteredBeers);
  return (
    <div className="mx-8">
      <div>
        <div className="w-full text-center my-8">
          <input
            className="border border-grey-970 py-2 px-4 w-96 rounded-full  outline-none  focus:outline-none focus:ring-2 focus:ring-grey-475 focus:border-transparent"
            placeholder="Search for beer"
            type="text"
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
          />
        </div>
      </div>
      <Beers beers={beers} />
    </div>
  );
}

export default App;
