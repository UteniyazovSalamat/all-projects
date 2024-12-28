import axios from 'axios';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CellUserInfo from './CellUserInfo';
import { COLUMN_NAMES_LOWER_CASE } from './useReducer/useReducer';
import { Authcontext } from '../../context';

const UserRow = ({ id, name, surname, age, email }) => {
    const { dispatch } = useContext(Authcontext);

    const userListInfo = [
        { columnValue: name, uniqId: uuidv4() },
        { columnValue: surname, uniqId: uuidv4() },
        { columnValue: age, uniqId: uuidv4() },
        { columnValue: email, uniqId: uuidv4() },
    ];

    const [isEdit, setIsEdit] = useState(false);

    // должны были разобраться....
    // const [editedUserData, setEditedUserData] = useState({
    //     id,
    //     name,
    //     surname,
    //     age,
    //     email,
    // });

    let newObject = { id, name, surname, age, email };
    const createObjectNewData = (value, index) => {
        newObject[COLUMN_NAMES_LOWER_CASE[index]] = value;
    };

    const handleClickSaveUser = async (id) => {
        try {
            const response = await axios.put(`https://671eb5571dfc42991982f658.mockapi.io/users/${id}`, newObject);
            dispatch({ type: 'UPDATE_USER', payload: { id, updatedUser: response.data } });
            setIsEdit(false);
            newObject = { id, name, surname, age, email };
        } catch (error) {
            console.log(error);
        }
    };

    const handleClickDeleteUser = async () => {
        try {
            await axios.delete(`https://671eb5571dfc42991982f658.mockapi.io/users/${id}`);
            dispatch({ type: 'REMOVE_USER', payload: id });
            setIsEdit(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClickCancelUser = () => {
        setIsEdit(false);
    };

    const handleKeyDownSave = (e) => {
        if (e.key === 'Enter') {
            handleClickSaveUser(id);
        }
    };

    // должны были разобраться....
    // const handleChangeUserData = (text, columnName) => {
    //     console.log(columnName);
    //     console.log(text);
    //     console.log(editUserData);
    //     setEditUserData({ ...editUserData, [columnName]: text });
    // };

    return (
        <tr className="tbody__row">
            <td className="thead__row-item thead__checkbox">
                <label>
                    <input type="checkbox" className="real-checkbox" />
                    <span className="custom-checkbox"></span>
                </label>
            </td>
            {userListInfo.map(({ columnValue, uniqId }, index) => (
                <CellUserInfo
                    isEdit={isEdit}
                    key={uniqId}
                    index={index}
                    columnValue={columnValue}
                    createObjectNewData={createObjectNewData}
                    handleKeyDownSave={handleKeyDownSave}
                />
            ))}

            <td className="tbody__row-item">
                {isEdit ? (
                    <>
                        <button className="save" onClick={() => handleClickSaveUser(id)}>
                            save
                        </button>
                        <button className="cancel" onClick={handleClickCancelUser}>
                            cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button className="edit" onClick={() => setIsEdit(true)}>
                            edit
                        </button>
                        <button className="delete" onClick={() => handleClickDeleteUser(id)}>
                            delete
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default UserRow;
