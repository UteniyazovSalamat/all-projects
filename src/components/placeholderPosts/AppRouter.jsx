import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privetRoutes, publicRoutes } from './router/routes';
import { Authcontext } from '../../context/index';
import Loader from '../../components/placeholderPosts/UI/loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(Authcontext);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes>
            {isAuth ? (
                <>
                    {privetRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    ))}
                    <Route path="*" element={<Navigate to="/posts" />} />
                </>
            ) : (
                <>
                    {publicRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    ))}
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
};

export default AppRouter;
