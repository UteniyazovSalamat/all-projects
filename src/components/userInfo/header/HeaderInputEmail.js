import React, { useContext } from 'react';
import { validation } from '../../../validations/validation';
import { Authcontext } from '../../../context';

const HeaderInputEmail = () => {
    const { formData, setFormData } = useContext(Authcontext);

    return (
        <input
            value={formData.email}
            type="email"
            className={`header__user-input ${formData.email && validation(formData.email, 'Email') ? 'error__border' : ''}`}
            placeholder="Search by email..."
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
    );
};

export default HeaderInputEmail;
