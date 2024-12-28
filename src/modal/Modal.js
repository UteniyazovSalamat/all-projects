import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { Authcontext } from '../context';
import { closeModal } from '../components/userInfo/userFunctions/UserFunctions';

const Modal = ({ children }) => {
    const { state, dispatch, setNewUserData } = useContext(Authcontext);
    const { modalActive } = state;

    return ReactDOM.createPortal(
        <>
            <div className={modalActive ? 'modal active' : 'modal'} onClick={() => closeModal(dispatch, setNewUserData)}>
                {children}
            </div>
        </>,
        document.getElementById('root-modal')
    );
};

export default Modal;
