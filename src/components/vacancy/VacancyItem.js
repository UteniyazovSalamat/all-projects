import React from 'react';
import Button from './Button';

const VacancyItem = ({ id, company, isNew, featured, img, position, role, level, postedAt, contract, location, languages, tools, setFilterParams, filterParams }) => {
    const roleLevelLanguagesTools = [role, level, ...languages, ...tools];

    return (
        <div className="vacancy__list-item" key={id}>
            <div className="item-img">
                <img src={img} alt="images" />
            </div>

            <div className="item-description">
                <ul className="main-list">
                    <li className="item-name">{company}</li>
                    {isNew && <li className="item-new">NEW!</li>}
                    {featured && <li className="item-featured">FEATURED</li>}
                </ul>
                <h3 className="position">{position}</h3>
                <ul className="list-conditions">
                    <li className="item-condition">{postedAt}</li>
                    <li className="item-condition">{contract}</li>
                    <li className="item-condition">{location}</li>
                </ul>
            </div>

            <div className="item-tags">
                {roleLevelLanguagesTools.map((tag) => (
                    <Button tag={tag} key={tag} setFilterParams={setFilterParams} filterParams={filterParams} />
                ))}
            </div>
        </div>
    );
};

export default VacancyItem;
