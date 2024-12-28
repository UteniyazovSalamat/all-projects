import React, { useContext } from 'react';
import { validation } from '../../../validations/validation';
import { Authcontext } from '../../../context';

const HeaderInputName = () => {
    const { formData, setFormData } = useContext(Authcontext);

    return (
        <input
            type="text"
            value={formData.name}
            className={`header__user-input ${formData.name && validation(formData.name, 'Name') ? 'error__border' : ''}`}
            placeholder="Search by name..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
    );
};

export default HeaderInputName;
