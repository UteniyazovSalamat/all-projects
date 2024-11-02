import React, { useEffect, useState } from 'react';
import './users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getUsersData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((value) => value.json())
                .then((res) => setUsers(res));
        };
        getUsersData();
    }, []);

    const handleClickUserName = (id) => {
        if (id === userInfo?.id) return;
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then((value) => value.json())
            .then((res) => setUserInfo(res));
        setPosts([]);
    };

    const handleClickShowPosts = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then((res) => setPosts(res));
    };

    return (
        <div className="user-container">
            <div className="user">
                {users.map((user) => (
                    <button className="user__btn" onClick={() => handleClickUserName(user.id)} key={user.id}>
                        {user.name}
                    </button>
                ))}
            </div>

            <div className={`user-info ${userInfo ? 'user-info--active' : ''}`}>
                {userInfo && (
                    <div>
                        <h2 className="user-info__name">{userInfo.name}</h2>
                        <h2 className="user-info__email">{userInfo.email}</h2>
                        <h2 className="user-info__phone">{userInfo.phone}</h2>
                        <p className="user-info__p">
                            {userInfo.address.city} {userInfo.address.street}, {userInfo.address.suite}
                        </p>
                        <h3 className="user-info__company">Company: {userInfo.company.name}</h3>
                        <button className="btn" onClick={() => handleClickShowPosts(userInfo.id)}>
                            Show posts
                        </button>

                        {posts.length > 0 && (
                            <ul className="user-posts__list">
                                {posts.map((post) => (
                                    <li key={post.id} className="user-posts__item">
                                        <h3 className="post__title">{post.title}</h3>
                                        <p className="post__body">{post.body}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
