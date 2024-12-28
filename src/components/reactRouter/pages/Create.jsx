import React from 'react';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="create">
            <h1 className="create__title">Create a post</h1>
            <div className="logOut">
                <button onClick={() => signOut(() => navigate('/', { replace: true }))} className="logOut__btn">
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Create;
