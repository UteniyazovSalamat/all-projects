import React, { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { MdFileDownloadDone } from 'react-icons/md';

const TodoTask = ({ id, text, completed, handleChangeCompletedTask, handleClickEditTask, handleClickDeleteTask, theme }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editTaskText, setEditTaskText] = useState(text);

    const handleClickSaveTask = (id) => {
        if (editTaskText.trim().length > 0) {
            handleClickEditTask(id, editTaskText);
            setIsEdit(false);
        }
    };

    const handleClickCancelTask = () => {
        setIsEdit(false);
        setEditTaskText(text);
    };

    const handleKeyDownSave = (e) => {
        if (e.key === 'Enter') {
            handleClickSaveTask(id);
        }
    };

    return (
        <li className={`todo__task ${theme && 'todo__task-dark'}`}>
            <label className="todo__checkbox-label">
                <input type="checkbox" checked={completed} onChange={() => handleChangeCompletedTask(id)} className="real-checkbox" />
                <span className={`custom-checkbox ${theme && 'custom-checkbox-dark'}`}></span>
            </label>
            {isEdit ? (
                <input
                    type="text"
                    className={`todo__input-edit ${theme && 'todo__input-edit-dark'}`}
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                    onKeyDown={handleKeyDownSave}
                />
            ) : (
                <span className={`todo__task-name ${completed && 'todo__task--line-through'} ${theme && 'todo__task-name-dark'}`}>{text}</span>
            )}

            <div className="todo__task-edit-delete">
                {isEdit ? (
                    <div className="todo__task-edit-delete">
                        <button className="todo__task-save" onClick={() => handleClickSaveTask(id)}>
                            <MdFileDownloadDone style={{ fontSize: '18px' }} />
                        </button>
                        <button className="todo__task-cancel" onClick={handleClickCancelTask}>
                            <ImCancelCircle style={{ fontSize: '18px' }} />
                        </button>
                    </div>
                ) : (
                    <div className="todo__task-edit-delete">
                        <button className="todo__task-edit" onClick={() => setIsEdit(true)}>
                            <FaEdit style={{ fontSize: '18px' }} />
                        </button>
                        <button className="todo__task-delete" onClick={() => handleClickDeleteTask(id)}>
                            <FaRegTrashCan style={{ fontSize: '18px' }} />
                        </button>
                    </div>
                )}
            </div>
        </li>
    );
};

export default TodoTask;
