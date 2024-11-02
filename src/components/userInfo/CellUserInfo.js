import React, { useState } from 'react';

const INPUT_TYPES = ['text', 'text', 'number', 'email'];

const CellUserInfo = ({ isEdit, index, columnValue, createObjectNewData }) => {
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
                    // onKeyDown={handleKeyDownSave}
                />
            ) : (
                <span>{columnValue}</span>
            )}
        </td>
    );
};

export default CellUserInfo;
