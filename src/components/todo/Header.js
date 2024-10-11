import React from 'react';

const Header = ({ theme, handleClickChangeTheme }) => {
    return (
        <header className="todo__header">
            <h1 className="todo__title">TODO</h1>
            <button className="todo__header-btn" onClick={handleClickChangeTheme}>
                {theme ? (
                    <img className="todo__header-img" src="./images/imgs/icon-sun.svg" alt="svg" />
                ) : (
                    <img className="todo__header-img" src="./images/imgs/icon-moon.svg" alt="svg" />
                )}
            </button>
        </header>
    );
};

export default Header;
