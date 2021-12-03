import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import './App.css';

import BeerSearch from './components/beer-search';
import BeerCart from './components/beer-cart';
import BeerList from './components/beer-list';
import ErrorModal from './components/error-modal';

import * as beerApi from './api/beerApi';

function App() {
	const [beerList, setBeerList] = useState([]);
	const [selectedBeers, setSelectedBeers] = useState([]);

	const [errorMessage, setErrorMessage] = useState(null);

	const onSearchClick = (name, description) => {
		beerApi.getBeers(name, description).then(beerList => {
			setBeerList(beerList);
		}).catch(error => {
			setErrorMessage("Error fetching beers: " + error)
		});
	}

	const onCartClick = (beerId) => {
		const beerSelection = beerList.filter(beer => beer.id === beerId);

		setSelectedBeers([
			...selectedBeers,
			beerSelection
		]);
	}

	const closeModal = () => {
		setErrorMessage(null);
	}

	return (
		<div className="App">
			<Row className="m-4">
				<h1>Let's get some beers!</h1>
			</Row>
			<Row>
				<div className="beer-search-container">
					<BeerSearch onSearchClick={onSearchClick} />
				</div>
				{/* <div className="beer-cart-container" >
					<BeerCart selectedBeers={selectedBeers} />
				</div> */}
			</Row>
			<Row>
				<BeerList beerList={beerList} onCartClick={onCartClick} />
			</Row>

			{errorMessage &&
				<ErrorModal closeModal={closeModal} errorMessage={errorMessage} />
			}
		</div>
	);
}

export default App;
