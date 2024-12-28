import React from 'react';
import { Route, Navigate, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Page from './pages/Page';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Login from './pages/Login';
import RequireAuth from './hoc/RequireAuth';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Route>
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="posts" element={<Blog />} />
            <Route path="posts/:id" element={<Page />} />
            <Route path="posts/:id/edit" element={<Edit />} />
            <Route
                path="posts/new"
                element={
                    <RequireAuth>
                        <Create />
                    </RequireAuth>
                }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
