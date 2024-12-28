import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../../context';

const Pagination = () => {
    const { state, dispatch } = useContext(Authcontext);
    const { users, currentPage, limit } = state;

    const firstIndex = (currentPage - 1) * limit;
    const lastIndex = currentPage * limit;
    const currentUsers = users.slice(firstIndex, lastIndex);

    useEffect(() => {
        dispatch({ type: 'SET_CURRENT_VISIBLE_USERS', payload: currentUsers });
    }, [currentPage, limit, users]);

    const totalPages = Math.ceil(state.users.length / state.limit);

    const options = [
        { value: 5, name: '5' },
        { value: 10, name: '10' },
        { value: 25, name: '25' },
        { value: users.length, name: 'Показать все' },
    ];

    const handleLimitChange = (e) => {
        dispatch({ type: 'SET_LIMIT', payload: Number(e.target.value) });
        dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
    };

    const handleChangePage = (e) => {
        if (e.target.value > 0 && e.target.value <= totalPages) {
            dispatch({ type: 'SET_CURRENT_PAGE', payload: Number(e.target.value) });
        }
    };

    return (
        <div className="pagination">
            <button className="pagination__btn" onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage - 1 })} disabled={currentPage <= 1}>
                Previous
            </button>

            <label className="pagination__text">Page</label>
            <input type="number" className="pagination__input" value={currentPage} onChange={handleChangePage} />

            <span className="pagination__total">
                of <strong>{totalPages}</strong>
            </span>

            <select className="pagination__select" value={limit} onChange={handleLimitChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>

            <button className="pagination__btn" onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage + 1 })} disabled={currentPage >= totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
