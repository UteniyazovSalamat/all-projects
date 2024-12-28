import React from 'react';
import ColumnName from '../ColumnName';
import { COLUMN_NAMES } from '../useReducer/useReducer';

const Thead = () => {
    return (
        <thead className="thead">
            <tr className="thead__row">
                <th className="thead__row-item thead__checkbox">
                    <label>
                        <input type="checkbox" className="real-checkbox" />
                        <span className="custom-checkbox"></span>
                    </label>
                </th>
                {COLUMN_NAMES.map((columnName) => (
                    <ColumnName key={columnName} columnName={columnName} />
                ))}
            </tr>
        </thead>
    );
};

export default Thead;
