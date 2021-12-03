import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

function BeerSearch(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')

    const onClick = () => {
        props.onSearchClick(name, description);
    }

    return (
        <div>
            <h4>Search for a beer by its name or description</h4>
            <Form>
                <Form.Group className="input-container">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="input-container">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={e => setDescription(e.target.value)} />
                </Form.Group>
            </Form>

            <Button className="mt-3" variant="primary" onClick={onClick}>Search</Button>
        </div>
    )
}

BeerSearch.propTyoes = {
    onSearchClick: PropTypes.func.isRequired,
}

export default BeerSearch