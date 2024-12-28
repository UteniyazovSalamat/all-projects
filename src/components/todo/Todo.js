import React, { useState, useEffect } from 'react';
import './todo.css';
import Header from './Header';
import TodoInputContainer from './TodoInputContainer';
import TodoTasksContainer from './TodoTasksContainer';
import TodoFooter from './TodoFooter';

const Todo = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [theme, setTheme] = useState(false);

    const updateThemeByCurrentTime = () => {
        const currentHour = new Date().getHours();
        setTheme(currentHour >= 21 || currentHour < 9);
    };

    useEffect(() => {
        updateThemeByCurrentTime();
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
