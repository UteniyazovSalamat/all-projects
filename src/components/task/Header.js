import React from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { MdNightlightRound } from 'react-icons/md';
import TimeDisplay from './TimeDisplay';

const Header = ({ theme, setTheme }) => {
    return (
        <header className="header">
            <div className={`header__icons ${theme && 'header__icons-dark'}`}>
                <button className={`header__btn ${theme ? 'active' : ''}`} onClick={() => setTheme(false)}>
                    <IoSunnyOutline />
                </button>
                <button className={`header__btn ${!theme ? 'active' : ''}`} onClick={() => setTheme(true)}>
                    <MdNightlightRound />
                </button>
            </div>
            <TimeDisplay />
        </header>
    );
};

export default Header;
