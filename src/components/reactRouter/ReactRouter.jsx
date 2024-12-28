import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './reactRouter.css';
import { router } from './routes';
import { AuthProvider } from './hoc/AuthProvider';

const reactRouter = () => {
    return (
        <div className="reactRouter">
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </div>
    );
};

export default reactRouter;
