import React, { useEffect, useState } from 'react';
import './userInfo.css';
import axios from 'axios';
import Thead from './Thead';
import Tbody from './Tbody';
import HeaderUser from './HeaderUser';
import Modal from '../../modal/Modal';
// import { v4 as uuidv4 } from 'uuid';

const COLUMN_NAMES = ['naMe', 'sUrNamE', 'aGE', 'eMAil', 'actions'].map((column) => column[0].toUpperCase().concat(column.slice(1).toLowerCase()));
const INPUT_TYPES = ['text', 'text', 'number', 'email'];

const UserInfo = () => {
    const [users, setUsers] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    const [newUserData, setNewUserData] = useState({
        name: '',
        surname: '',
        age: '',
        email: '',
    });

    const handleClickAddUser = async (e) => {
        e.preventDefault();
        if (Object.values(newUserData).some((value) => value.trim().length === 0)) return;
        try {
            const response = await axios.post(`https://671eb5571dfc42991982f658.mockapi.io/users/`, newUserData);
            setUsers((prevState) => [...prevState, response.data]);
            setNewUserData({
                name: '',
                surname: '',
                age: '',
                email: '',
            });
            setModalActive(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getFetchUsers = () => {
            axios
                .get('https://671eb5571dfc42991982f658.mockapi.io/users')
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        getFetchUsers();
    }, []);

    const handleClickOpenModal = () => {
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    return (
        <div className="user-info">
            <Modal modalActive={modalActive} closeModal={closeModal}>
                <form className={modalActive ? 'modal__content-form active' : 'modal__content-form'} onClick={(e) => e.stopPropagation()}>
                    {COLUMN_NAMES.slice(0, 4).map((column, index) => (
                        <fieldset className="content__form" key={column}>
                            <label htmlFor="">{column}</label>
                            <input
                                name={column}
                                className="modal__form-input"
                                type={INPUT_TYPES[index]}
                                placeholder={`${column}...`}
                                value={newUserData[column]}
                                onChange={(e) => setNewUserData({ ...newUserData, [column.toLowerCase()]: e.target.value })}
                            />
                        </fieldset>
                    ))}
                    <div className="modal__button">
                        <button className="modal__form-btn" onClick={handleClickAddUser}>
                            Add
                        </button>
                    </div>
                </form>
            </Modal>
            <HeaderUser handleClickOpenModal={handleClickOpenModal} handleClickAddUser={handleClickAddUser} />
            <table className="table">
                <Thead COLUMN_NAMES={COLUMN_NAMES} />
                <Tbody users={users} setUsers={setUsers} />
            </table>
        </div>
    );
};

export default UserInfo;
