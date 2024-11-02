import React from 'react';
import UserRow from './UserRow';

const Tbody = ({ users, setUsers }) => {
    return (
        <tbody className="tbody">
            {users.map((user) => (
                <UserRow key={user.id} id={user.id} name={user.name} surname={user.surname} age={user.age} email={user.email} setUsers={setUsers} />
            ))}
        </tbody>
    );
};

export default Tbody;
