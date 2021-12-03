import React from 'react';
import PropTypes from 'prop-types';

function BeerCartEntry(props) {
    return (
        <div className="m-4">
            <div>
                {props.beer.name}
            </div>
        </div>
    )
}

BeerCartEntry.propTypes = {
    beer: PropTypes.object.isRequired,
}


export default BeerCartEntry