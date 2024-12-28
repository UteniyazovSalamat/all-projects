import React, { useEffect, useState } from 'react';
import './placeholderPosts.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './UI/navbar/Navbar';
import { Authcontext } from '../../context';
import AppRouter from './AppRouter';

const PlaceholderPosts = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <div className="placeholder">
            <Authcontext.Provider
                value={{
                    isAuth,
                    setIsAuth,
                    isLoading,
                }}>
                <BrowserRouter>
                    <Navbar />
                    <AppRouter />
                </BrowserRouter>
            </Authcontext.Provider>
        </div>
    );
};

export default PlaceholderPosts;
