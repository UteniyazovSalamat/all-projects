import React from 'react';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaSortAlphaUp } from 'react-icons/fa';
import { FaSortNumericDown } from 'react-icons/fa';
import { FaSortNumericUp } from 'react-icons/fa';

const ColumnName = ({ columnName }) => {
    return (
        <th className="thead__row-item">
            {columnName.slice(0, 1).toUpperCase().concat(columnName.slice(1).toLowerCase())}
            {columnName.toLowerCase() !== 'actions' && (
                <div className="thead__row-item-icons">
                    {columnName.toLowerCase() === 'age' ? (
                        <>
                            <button className="thead__row-item-icon">
                                <FaSortNumericDown />
                            </button>
                            <button className="thead__row-item-icon">
                                <FaSortNumericUp />
                            </button>
                        </>
                    ) : (
                        <>
                            <button className="thead__row-item-icon">
                                <FaSortAlphaDown />
                            </button>
                            <button className="thead__row-item-icon">
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
