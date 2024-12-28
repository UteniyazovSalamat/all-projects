import { columnSorted } from './sortTools.js';

export const bubleSort = (users, sortMethod = 'asc', columnName = 'Name') => {
    const sortUsers = [...users];

    for (let i = 0; i < sortUsers.length - 1; i++) {
        for (let j = 0; j < sortUsers.length - 1 - i; j++) {
            const currentEl = sortUsers[j][columnName.toLowerCase()];
            const nextEl = sortUsers[j + 1][columnName.toLowerCase()];

            if (columnSorted[columnName](currentEl, nextEl, sortMethod) > 0) {
                [sortUsers[j], sortUsers[j + 1]] = [sortUsers[j + 1], sortUsers[j]];
            }
        }
    }
    return sortUsers;
};
