import React, { useState } from 'react';
import './SearchBar.scss';
import axios from 'axios';

const PAGE_BEERS = 'beers';
const PAGE_BASKET = 'basket';

const SearchBar = () => {
  const [page, setPage] = useState('beers');
  const [basket, setBasket] = useState([]);
  const [beers, setBeers] = useState([]);
  const [beerName, setBeerName] = useState('');

  const searchBeerFunc = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
      .then((res) => {
        setBeers(res.data);
      });
  };

  const addToBasket = (beer) => {
    if (basket.length < 60) {
      setBasket([...basket, beer]);
    } else {
      alert('Slow down on the beers, your basket is full!');
    }
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const removeFromBasket = (removeBeer) => {
    setBasket(basket.filter((beer) => beer !== removeBeer));
  };

  return (
    <div>
                <input
          onChange={(e) => {
            setBeerName(e.target.value);
          }}
          onKeyDown={searchBeerFunc}
          placeholder='search beer by name'
        ></input>
      <div className='pages'>
        <button onClick={() => navigateTo(PAGE_BEERS)}>
          Go to beer search
        </button>
        <button onClick={() => navigateTo(PAGE_BASKET)}>
          Go to basket {basket.length}
        </button>
      </div>


      <div className='results'>
        {page === PAGE_BEERS && (
          <div className='beers'>
            <h3>Beer Search</h3>
            <div className='beerContainer'>
              {beers.map((res, index) => (
                <div key={index} className='beerResults'>
                  <h3>{res.name}</h3>
                  <p>{res.tagline}</p>
                  <img src={res.image_url} alt='beer_img' />
                  <button
                    onClick={() => {
                      addToBasket(res);
                    }}
                  >
                    Add to basket
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {page === PAGE_BASKET && (
          <div className='basket'>
            <h3>Basket</h3>
            <div className='beerContainer'>
              {basket.map((res, index) => (
                <div key={index} className='beerResults'>
                  <p>{res.name}</p>
                  <p>{res.tagline}</p>
                  <img src={res.image_url} alt='beer_img' />
                  <button onClick={() => removeFromBasket(res)}>
                    Remove from basket
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
