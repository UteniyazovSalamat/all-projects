import React from 'react';

const HeaderUser = ({ handleClickOpenModal }) => {
    return (
        <div className="header__user">
            <button className="header__user-btn" onClick={handleClickOpenModal}>
                Add user
            </button>
        </div>
    );
};

export default HeaderUser;
