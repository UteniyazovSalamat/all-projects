import React, { useState } from 'react';
import './todo.css';
import Header from './Header';
import TodoInputContainer from './TodoInputContainer';
import TodoTasksContainer from './TodoTasksContainer';
import TodoFooter from './TodoFooter';

const Todo = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [theme, setTheme] = useState(true);

    const handleClickChangeTheme = () => {
        setTheme(!theme);
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
