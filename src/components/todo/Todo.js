import React, { useState, useEffect } from 'react';
import './todo.css';
import Header from './Header';
import TodoInputContainer from './TodoInputContainer';
import TodoTasksContainer from './TodoTasksContainer';
import TodoFooter from './TodoFooter';

const getCurrentTime = () => {
    const date = new Date();
    const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    return time >= 9 && time < 21;
};

const Todo = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [theme, setTheme] = useState(getCurrentTime());

    useEffect(() => {
        setTheme(getCurrentTime());
    }, []);

    const handleClickChangeTheme = () => {
        setTheme(theme ? false : true);
    };

    return (
        <div className={`todo ${theme && 'todo__dark'}`}>
            <div className="container">
                <Header theme={theme} handleClickChangeTheme={handleClickChangeTheme} />
                <TodoInputContainer tasks={tasks} setTasks={setTasks} theme={theme} />
                <TodoTasksContainer tasks={tasks} setTasks={setTasks} theme={theme} />
                <TodoFooter />
            </div>
        </div>
    );
};

export default Todo;
