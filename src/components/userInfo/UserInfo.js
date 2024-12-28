import React, { useReducer, useState } from 'react';
import './userInfo.css';
import HeaderUser from './header/HeaderUser.js';
import Modal from '../../modal/Modal';
import Table from './table/Table.js';
import FormUser from './form/FormUser.js';
import { Authcontext } from '../../context/index.js';
import { initialState, reducer } from './useReducer/useReducer.js';

const UserInfo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [formData, setFormData] = useState({
        name: '',
        min: '',
        max: '',
        email: '',
    });
    const [newUserData, setNewUserData] = useState({
        name: '',
        surname: '',
        age: '',
        email: '',
    });

    return (
        <div className="user-info">
            <Authcontext.Provider
                value={{
                    formData,
                    setFormData,
                    newUserData,
                    setNewUserData,
                    state,
                    dispatch,
                }}>
                <Modal>
                    <FormUser />
                </Modal>
                <HeaderUser />
                <Table />
            </Authcontext.Provider>
        </div>
    );
};

export default UserInfo;
