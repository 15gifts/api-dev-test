import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BeerCell from './beer-cell';

function BeerList(props) {
    const [beerList, setBeerList] = useState([])

    // Set the table data when input data changes
    useEffect(() => {
        setBeerList(props.beerList);
    }, [props.beerList]);

    return (
        <div className="mt-5 data-grid-container">
            {beerList.length > 0 ?
                <>
                    {beerList.map((beer, index) =>
                        <BeerCell key={index} beer={beer} onCartClick={props.onCartClick} />
                    )}
                </>
                :
                <div className="m-auto">No beers currently found.</div>}
        </div>
    )
}

BeerList.propTypes = {
    beerList: PropTypes.array.isRequired,
}

export default BeerList