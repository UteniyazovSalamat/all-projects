import React, { useContext } from 'react';
import { Authcontext } from '../../../context';
import { handleClickOpenModal } from '../userFunctions/UserFunctions';

const HeaderBtn = () => {
    const { dispatch } = useContext(Authcontext);

    return (
        <button className="header__user-btn" onClick={() => handleClickOpenModal(dispatch)}>
            Add user
        </button>
    );
};

export default HeaderBtn;
