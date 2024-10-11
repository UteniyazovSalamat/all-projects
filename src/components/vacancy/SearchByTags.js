import React from 'react';

const SearchByTags = ({ filterParams, setFilterParams }) => {
    const handleClickRemoveTag = (tag) => {
        setFilterParams(filterParams.filter((el) => tag !== el));
    };

    return (
        <div className="filter__container">
            <ul className="filter__list">
                {filterParams.map((tag) => (
                    <li className="filter__list-item" key={tag}>
                        <span className="filter__list-item-text">{tag}</span>
                        <button onClick={() => handleClickRemoveTag(tag)} className="filter__list-item-btn">
                            <img className="img-remove" src="./images/picture/icon-remove.svg" alt="images" />
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => setFilterParams([])} className="btn-clearAll">
                Clear
            </button>
        </div>
    );
};

export default SearchByTags;
