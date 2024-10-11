import React from 'react';
import { arr } from '../../data/data';
import VacancyItem from './VacancyItem';

const VacancyList = ({ filterParams, setFilterParams }) => {
    const filteredArr = arr.filter((vacancy) => {
        const tags = [vacancy.role, vacancy.level, ...vacancy.languages, ...vacancy.tools];
        if (filterParams.every((param) => tags.includes(param))) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <div className="vacancy__list">
            {filteredArr.map((vacancy) => (
                <VacancyItem
                    id={vacancy.id}
                    company={vacancy.company}
                    isNew={vacancy.new}
                    featured={vacancy.featured}
                    img={vacancy.img}
                    position={vacancy.position}
                    role={vacancy.role}
                    level={vacancy.level}
                    postedAt={vacancy.postedAt}
                    contract={vacancy.contract}
                    location={vacancy.location}
                    languages={vacancy.languages}
                    tools={vacancy.tools}
                    key={vacancy.id}
                    setFilterParams={setFilterParams}
                    filterParams={filterParams}
                />
            ))}
        </div>
    );
};

export default VacancyList;
