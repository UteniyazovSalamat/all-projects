import React, { useState } from 'react';
import { INPUT_TYPES } from './useReducer/useReducer';

const CellUserInfo = ({ isEdit, index, columnValue, createObjectNewData, handleKeyDownSave }) => {
    const [editUserCellInfo, setEditUserCellInfo] = useState(columnValue);
    // createObjectNewData(editUserCellInfo);

    const handleChangeInputText = (text) => {
        createObjectNewData(text, index);
        setEditUserCellInfo(text);
    };

    return (
        <td className="tbody__row-item">
            {isEdit ? (
                <input
                    className="tbody__row-item-input"
                    type={INPUT_TYPES[index]}
                    value={editUserCellInfo}
                    onChange={(e) => handleChangeInputText(e.target.value)}
                    onKeyDown={handleKeyDownSave}
                />
            ) : (
                <span>{columnValue}</span>
            )}
        </td>
    );
};

export default CellUserInfo;
