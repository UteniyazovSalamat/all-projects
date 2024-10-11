import React, { useState } from 'react';
import './vacancy.css';
import Header from './Header';
import VacancyList from './VacancyList';
import SearchByTags from './SearchByTags';

const Vacancy = () => {
    const [filterParams, setFilterParams] = useState([]);

    return (
        <div className="vacancy-container">
            <Header />
            {filterParams.length > 0 && <SearchByTags filterParams={filterParams} setFilterParams={setFilterParams} />}
            <VacancyList filterParams={filterParams} setFilterParams={setFilterParams} />
        </div>
    );
};

export default Vacancy;
