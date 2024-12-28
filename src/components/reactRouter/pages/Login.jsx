import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;

        signIn(user, () => navigate(fromPage, { replace: true }));
    };

    return (
        <div className="login">
            <h1 className="login__title">Login page</h1>
            <form onSubmit={handleSubmit} className="login__form">
                <label>
                    <span className="span__name">Name:</span> <input type="text" name="username" className="login__input" />
                </label>
                <button type="submit" className="login__btn">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
