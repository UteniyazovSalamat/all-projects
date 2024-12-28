import React from 'react';
import _ from 'lodash';

const Task = ({ number, setNumber, primes, theme }) => {
    const processChange = _.debounce((value) => setNumber(value), 400);

    return (
        <div className={`task ${theme && 'task__dark'}`}>
            <h1 className="task__title">Your number:</h1>
            <input type="number" className={`task__input ${theme && 'task__input-dark'}`} onChange={(e) => processChange(e.target.value)} />
            <p className="task__text">
                There are <strong>{primes.length}</strong> primes between 1 and {number} : {primes.join(', ')}.
            </p>
        </div>
    );
};

export default Task;
