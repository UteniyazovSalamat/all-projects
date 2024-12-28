import React, { useContext } from 'react';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaSortAlphaUp } from 'react-icons/fa';
import { FaSortNumericDown } from 'react-icons/fa';
import { FaSortNumericUp } from 'react-icons/fa';
import { bubleSort } from '../../sort/bubleSort';
import { quickSort } from '../../sort/quickSort';
import { mergeSort } from '../../sort/MergeSort';
import { Authcontext } from '../../context';

const ColumnName = ({ columnName }) => {
    const { state, dispatch } = useContext(Authcontext);
    const { currentVisibleUsers, selectedSort } = state;

    const handleClickSortUsers = (sortMethod) => {
        // console.time('start');

        const sortedUsers = {
            buble: bubleSort(currentVisibleUsers, sortMethod, columnName),
            quick: quickSort(currentVisibleUsers, sortMethod, columnName),
            merge: mergeSort(currentVisibleUsers, sortMethod, columnName),
        };
        dispatch({ type: 'SET_CURRENT_VISIBLE_USERS', payload: sortedUsers[selectedSort] });

        // console.timeEnd('start');
    };

    return (
        <th className="thead__row-item">
            {columnName.slice(0, 1).toUpperCase().concat(columnName.slice(1).toLowerCase())}
            {columnName.toLowerCase() !== 'actions' && (
                <div className="thead__row-item-icons">
                    {columnName.toLowerCase() === 'age' ? (
                        <>
                            <button className="thead__row-item-icon" onClick={() => handleClickSortUsers('asc')}>
                                <FaSortNumericDown />
                            </button>
                            <button className="thead__row-item-icon" onClick={() => handleClickSortUsers('desc')}>
                                <FaSortNumericUp />
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="thead__row-item-icon" onClick={() => handleClickSortUsers('asc')}>
                                <FaSortAlphaDown />
                            </button>
                            <button className="thead__row-item-icon" onClick={() => handleClickSortUsers('desc')}>
                                <FaSortAlphaUp />
                            </button>
                        </>
                    )}
                </div>
            )}
        </th>
    );
};

export default ColumnName;
