import React, { useContext } from 'react';
import { validation } from '../../../validations/validation';
import HeaderSelect from './HeaderSelect';
import HeaderInputName from './HeaderInputName';
import HeaderInputEmail from './HeaderInputEmail';
import HeaderBtn from './HeaderBtn';
import HeaderAgeFilter from './HeaderAgeFilter';
import { Authcontext } from '../../../context';

const HeaderUser = () => {
    const { formData } = useContext(Authcontext);

    return (
        <div className="header__user">
            <HeaderSelect />
            <HeaderInputName />

            {formData.name && validation(formData.name, 'Name') && <span className="modal__form-input-error">{validation(formData.name, 'Name')}</span>}

            <HeaderAgeFilter />
            <HeaderInputEmail />

            {formData.email && validation(formData.email, 'Email') && <span className="modal__form-input-error">{validation(formData.email, 'Email')}</span>}

            <HeaderBtn />
        </div>
    );
};

export default HeaderUser;
