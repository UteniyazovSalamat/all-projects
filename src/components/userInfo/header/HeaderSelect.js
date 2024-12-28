import React, { useContext } from 'react';
import { Authcontext } from '../../../context';

const HeaderSelect = () => {
    const { dispatch } = useContext(Authcontext);

    return (
        <select onChange={(e) => dispatch({ type: 'SET_SELECTED_SORT', payload: e.target.value })} className="header__user-select">
            <option>buble</option>
            <option>quick</option>
            <option>merge</option>
        </select>
    );
};

export default HeaderSelect;
