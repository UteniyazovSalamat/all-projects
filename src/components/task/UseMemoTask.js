import React, { useMemo, useState, useEffect } from 'react';
import './useMemoTask.css';
import Header from './Header';
import Task from './Task';

const UseMemoTask = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);

    const updateThemeByCurrentTime = () => {
        const currentHour = new Date().getHours();
        setTheme(currentHour >= 21 || currentHour < 9);
    };

    useEffect(() => {
        updateThemeByCurrentTime();
    }, []);

    console.time('FirstWay');

    const primes = useMemo(() => {
        const arr = [];
        for (let i = 2; i < number; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                arr.push(i);
            }
        }
        return arr;
    }, [number]);

    console.timeEnd('FirstWay');

    return (
        <div className={`container ${theme ? 'dark' : 'light'}`}>
            <Header theme={theme} setTheme={setTheme} />
            <Task number={number} setNumber={setNumber} primes={primes} theme={theme} />
        </div>
    );
};

export default UseMemoTask;
