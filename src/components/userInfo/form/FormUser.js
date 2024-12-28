import React, { useContext, useEffect } from 'react';
import { validation } from '../../../validations/validation';
import { Authcontext } from '../../../context';
import { COLUMN_NAMES, INPUT_TYPES } from '../useReducer/useReducer';
import { fetchAddUser } from '../userFunctions/UserFunctions';
import axios from 'axios';

const FormUser = () => {
    const { state, dispatch, newUserData, setNewUserData } = useContext(Authcontext);
    const { modalActive, isDisabledBtn } = state;

    const handleClickAddUser = async (e) => {
        try {
            e.preventDefault();
            await fetchAddUser(newUserData, dispatch);
            setNewUserData({
                name: '',
                surname: '',
                age: '',
                email: '',
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (Object.entries(newUserData).every(([key, value]) => !validation(value, key[0].toUpperCase().concat(key.slice(1))))) {
            dispatch({ type: 'SET_IS_DISABLED_BTN', payload: false });
        } else {
            dispatch({ type: 'SET_IS_DISABLED_BTN', payload: true });
        }
    }, [newUserData]);

    useEffect(() => {
        const getFetchUsers = () => {
            axios
                .get('https://671eb5571dfc42991982f658.mockapi.io/users')
                .then((response) => {
                    dispatch({ type: 'SET_USERS', payload: response.data });
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        getFetchUsers();
    }, []);

    return (
        <form className={modalActive ? 'modal__content-form active' : 'modal__content-form'} onClick={(e) => e.stopPropagation()}>
            {COLUMN_NAMES.slice(0, 4).map((column, index) => (
                <fieldset className="content__form" key={column}>
                    <label className="label__names">{column}</label>
                    <div className="input-container">
                        <input
                            name={column}
                            className={`modal__form-input ${newUserData[column.toLowerCase()] && validation(newUserData[column.toLowerCase()], column) ? 'error__border' : ''}`}
                            type={INPUT_TYPES[index]}
                            placeholder={`${column}...`}
                            value={newUserData[column.toLowerCase()]}
                            onChange={(e) => setNewUserData({ ...newUserData, [column.toLowerCase()]: e.target.value })}
                            min={1}
                            required
                        />
                        {newUserData[column.toLowerCase()] && validation(newUserData[column.toLowerCase()], column) && (
                            <span className="modal__form-input-error">{validation(newUserData[column.toLowerCase()], column)}</span>
                        )}
                    </div>
                </fieldset>
            ))}
            <div className="modal__button">
                <button disabled={isDisabledBtn} className={`modal__form-btn ${isDisabledBtn && 'disabled__state'}`} onClick={handleClickAddUser}>
                    Add
                </button>
            </div>
        </form>
    );
};

export default FormUser;
