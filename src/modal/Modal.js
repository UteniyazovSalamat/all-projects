import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ children, modalActive, closeModal }) => {
    return ReactDOM.createPortal(
        <>
            <div className={modalActive ? 'modal active' : 'modal'} onClick={closeModal}>
                {children}
            </div>
        </>,
        document.getElementById('root-modal')
    );
};

export default Modal;
