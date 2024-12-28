import React, { useContext } from 'react';
import { validation } from '../../../validations/validation';
import { Authcontext } from '../../../context';

const HeaderAgeFilter = () => {
    const { formData, setFormData } = useContext(Authcontext);

    return (
        <div className="header__ages-filter">
            <input
                value={formData.min}
                type="number"
                className={`header__user-input input-age ${formData.min && validation(formData.min, 'Age') ? 'error__border' : ''}`}
                placeholder="min age"
                min={1}
                onChange={(e) => setFormData({ ...formData, min: e.target.value })}
            />

            {formData.min && validation(formData.min, 'Age') && <span className="modal__form-input-error">{validation(formData.min, 'Age')}</span>}

            <input
                value={formData.max}
                type="number"
                className={`header__user-input input-age ${formData.max && validation(formData.max, 'Age') ? 'error__border' : ''}`}
                placeholder="max age"
                max={120}
                onChange={(e) => setFormData({ ...formData, max: e.target.value })}
            />
            {formData.max && validation(formData.max, 'Age') && <span className="modal__form-input-error">{validation(formData.max, 'Age')}</span>}
        </div>
    );
};

export default HeaderAgeFilter;
