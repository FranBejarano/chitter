import PropTypes from 'prop-types';

const Modal = ({ handleClose, message }) => {

    const showHideClassName = message ? `modal display-block` : `modal display-none`;

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h3>Important Information</h3>
                <p>{message}</p>
                <button className="btn btn-primary" onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    message: PropTypes.string
};

export default Modal;