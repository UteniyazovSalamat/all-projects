import React from 'react';
import Pagination from '../Pagination';

const Tfoot = () => {
    return (
        <tfoot className="tfoot">
            <tr className="tfoot__row">
                <td colSpan="100%" className="tfoot__cell">
                    <Pagination />
                </td>
            </tr>
        </tfoot>
    );
};

export default Tfoot;
