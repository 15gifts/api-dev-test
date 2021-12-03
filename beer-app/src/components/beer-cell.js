import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

function BeerCell(props) {
    return (
        <div className="beer-cell m-4">
            <div className="beer-cell-col beer-cell-info">
                <div>
                    <h4>{props.beer.name}</h4>
                </div>
                <div>
                    <i>{props.beer.tagline}</i>
                </div>
            </div>
            <div className="beer-cell-col">
                <img src={props.beer.image_url} alt={props.beer.name} width="200" height="200" />
            </div>
            <div className="beer-cell-col beer-cell-add">
                <Button variant="primary" onClick={e => props.onCartClick(props.beer.id)}>
                    +
                </Button>
            </div>
        </div>
    )
}

BeerCell.propTypes = {
    beer: PropTypes.object.isRequired,
    onCartClick: PropTypes.func.isRequired,
}


export default BeerCell