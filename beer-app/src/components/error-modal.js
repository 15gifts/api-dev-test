import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function ErrorModal(props) {
    return (
        <div className="grey-black-out">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.errorMessage}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

ErrorModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
}

export default ErrorModal