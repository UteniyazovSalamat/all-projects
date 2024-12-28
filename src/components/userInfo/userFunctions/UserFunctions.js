import axios from 'axios';

export const fetchAddUser = async (newUserData, dispatch) => {
    if (Object.values(newUserData).some((value) => value.trim().length === 0)) return;
    try {
        const response = await axios.post(`https://671eb5571dfc42991982f658.mockapi.io/users/`, newUserData);
        dispatch({ type: 'SET_NEW_USER_DATA', payload: { key: 'name', value: '' } });
        dispatch({ type: 'SET_MODAL_ACTIVE', payload: false });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const handleClickOpenModal = (dispatch) => {
    dispatch({ type: 'SET_MODAL_ACTIVE', payload: true });
};

export const closeModal = (dispatch, setNewUserData) => {
    dispatch({ type: 'SET_MODAL_ACTIVE', payload: false });
    setNewUserData({
        name: '',
        surname: '',
        age: '',
        email: '',
    });
};
