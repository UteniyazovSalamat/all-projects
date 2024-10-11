import React from 'react';

const Button = ({ tag, setFilterParams, filterParams }) => {
    const handleClickAddFilterTag = () => {
        const uniqTags = [...new Set([...filterParams, tag])];
        setFilterParams(uniqTags);
    };

    return (
        <button className="item-tag" key={tag} onClick={handleClickAddFilterTag}>
            {tag}
        </button>
    );
};

export default Button;
