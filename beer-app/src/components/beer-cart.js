import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BeerCartEntry from './beer-cart-entry';

function BeerCart(props) {
    const [selectedBeers, setSelectedBeers] = useState([])

    useEffect(() => {
        if (props.selectedBeers !== null || props.selectedBeers !== undefined) {
            setSelectedBeers(props.selectedBeers);
        }
    }, [props.selectedBeers])

    return (
        <div>
            <h4>Selected Beers</h4>
            {selectedBeers.length > 0 &&
                <div>
                    <>
                        {selectedBeers.map((beer, index) =>
                            <BeerCartEntry key={index} beer={beer} />
                        )}
                    </>
                </div>
            }
        </div>
    )
}

BeerCart.propTypes = {
    selectedBeers: PropTypes.array.isRequired,
}

export default BeerCart