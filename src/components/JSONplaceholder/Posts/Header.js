import React from 'react';
import { BsSearch } from 'react-icons/bs';
import _ from 'lodash';

const Header = ({ handleClickOpenModal, setSearchPost }) => {
    const processChange = _.debounce((value) => setSearchPost(value), 400);

    return (
        <header className="header">
            <h1 className="header__title">Powered by JSONPlaceholder.</h1>
            <p className="header__subtitle">The posts are from JSONPlaceholder. You can create, read, update, and delete posts.</p>
            <div className="header__btn-input">
                <button className="header__btn" onClick={() => handleClickOpenModal('isCreate')}>
                    Create a post
                </button>
                <div className="search">
                    <input type="text" className="header__search-input" placeholder="Search..." onChange={(e) => processChange(e.target.value)} />
                    <span className="search__img">
                        <BsSearch />
                    </span>
                </div>
            </div>
            <span className="header__horizontal"></span>
        </header>
    );
};

export default Header;
