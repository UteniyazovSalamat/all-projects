import React, { useCallback, useContext, useMemo } from 'react';
import UserRow from '../UserRow';
import { Authcontext } from '../../../context';

const Tbody = () => {
    const { state, formData } = useContext(Authcontext);
    const { currentVisibleUsers } = state;

    const checkEveryUserValue = useCallback((key, value, user) => {
        if (key === 'name') {
            return user.name.toLowerCase().includes(value.toLowerCase()) || user.surname.toLowerCase().includes(value.toLowerCase());
        }
        if (key === 'email') {
            return user.email.toLowerCase().includes(value.toLowerCase());
        }
        if (key === 'min') {
            return user.age >= +value;
        }
        if (key === 'max') {
            return user.age <= +value;
        }
    }, []);

    const filterUser = useCallback(
        (users, formData) => {
            return users.filter((user) => {
                const newFormData = Object.entries(formData).filter(([_, value]) => value.length > 0);
                return newFormData.every(([key, value]) => checkEveryUserValue(key, value, user));
            });
        },
        [checkEveryUserValue]
    );

    const filteredUsers = useMemo(() => {
        return filterUser(currentVisibleUsers, formData);
    }, [currentVisibleUsers, formData, filterUser]);

    return (
        <tbody className="tbody">
            {filteredUsers.map((user) => (
                <UserRow key={user.id} id={user.id} name={user.name} surname={user.surname} age={user.age} email={user.email} />
            ))}
        </tbody>
    );
};

export default Tbody;
