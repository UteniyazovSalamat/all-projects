import React, { useContext } from 'react';
import MyInput from '../../../components/placeholderPosts/UI/input/MyInput';
import MyButton from '../../../components/placeholderPosts/UI/button/MyButton';
import { Authcontext } from '../../../context/index';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(Authcontext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин..." />
                <MyInput type="password" placeholder="Введите пароль..." />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
