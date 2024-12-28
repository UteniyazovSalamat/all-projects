import { columnSorted } from './sortTools.js';

export const quickSort = (users, sortMethod = 'asc', columnName = 'Name') => {
    const sortUsers = [...users];

    if (sortUsers.length <= 1) return sortUsers;

    const pivot = sortUsers[0];
    const less = [];
    const greater = [];

    for (let i = 1; i < sortUsers.length; i++) {
        const sortUserValue = sortUsers[i][columnName.toLowerCase()];
        const pivotValue = pivot[columnName.toLowerCase()];
        if (columnSorted[columnName](sortUserValue, pivotValue, sortMethod) <= 0) {
            less.push(sortUsers[i]);
        } else {
            greater.push(sortUsers[i]);
        }
    }
    return [...quickSort(less, sortMethod, columnName), pivot, ...quickSort(greater, sortMethod, columnName)];
};
