import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoInputContainer = ({ tasks, setTasks, theme }) => {
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim().length === 0) return;
        const newTask = {
            id: uuidv4(),
            text: taskText,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTaskText('');
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [taskText]);

    return (
        <div className="todo__input-container">
            <span className={`todo__input-round ${theme && 'todo__input-round-dark'}`}></span>
            <input
                className={`todo__input ${theme && 'todo__input-dark'}`}
                type="text"
                placeholder="Create a new todo..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
        </div>
    );
};

export default TodoInputContainer;
