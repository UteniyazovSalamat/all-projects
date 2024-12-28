import React from 'react';
import Thead from './Thead';
import Tfoot from './Tfoot';
import Tbody from './Tbody';

const Table = () => {
    return (
        <table className="table">
            <Thead />
            <Tbody />
            <Tfoot />
        </table>
    );
};

export default Table;
