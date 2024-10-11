import React, { useEffect, useState } from 'react';
import TodoTask from './TodoTask';

const FILTERS = {
    all: true,
    active: false,
    completed: false,
};

const TodoTasksContainer = ({ tasks, setTasks, theme }) => {
    const [currentFilter, setCurrentFilter] = useState(FILTERS);

    const filteredTasks = tasks.filter((task) => {
        // доделать нет смысла каждую итерацию проверять текущий метод фильтрации
        if (currentFilter.all) {
            return true;
        } else if (currentFilter.active) {
            return !task.completed;
        } else {
            return task.completed;
        }
    });

    const handleChangeCompletedTask = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                } else {
                    return task;
                }
            })
        );
    };

    useEffect(() => {}, [tasks]);

    const handleClickEditTask = (id, text) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, text: text };
                } else {
                    return task;
                }
            })
        );
    };

    const handleClickDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleClickFilter = (method) => {
        const newFilter = {};
        for (const key in currentFilter) {
            if (method === key) {
                newFilter[key] = true;
            } else {
                newFilter[key] = false;
            }
        }
        setCurrentFilter(newFilter);
    };

    const handleClickClearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    return (
        <div className="todo__tasks-container">
            <ul className="todo__tasks">
                {filteredTasks.map((task) => (
                    <TodoTask
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        handleChangeCompletedTask={handleChangeCompletedTask}
                        handleClickEditTask={handleClickEditTask}
                        handleClickDeleteTask={handleClickDeleteTask}
                        theme={theme}
                    />
                ))}
            </ul>
            <div className={`todo__controls ${theme && 'todo__controls-dark'}`}>
                <span className="todo__items-left">
                    <strong style={{ color: theme ? '#d0d3f0' : '#000' }}>{filteredTasks.length}</strong> items left
                </span>
                <div className="todo__filter-buttons">
                    <button className="todo__filter-btn-all" onClick={() => handleClickFilter('all')}>
                        All
                    </button>
                    <button className="todo__filter-btn-active" onClick={() => handleClickFilter('active')}>
                        Active
                    </button>
                    <button className="todo__filter-btn-completed" onClick={() => handleClickFilter('completed')}>
                        Completed
                    </button>
                </div>
                <button className="todo__clear-completed" onClick={handleClickClearCompleted}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default TodoTasksContainer;
