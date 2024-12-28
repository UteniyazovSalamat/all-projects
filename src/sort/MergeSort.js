import { columnSorted } from './sortTools.js';

const merge = (left, right, sortMethod, columnName) => {
    const sortedResult = [];

    while (left.length && right.length) {
        const leftValue = left[0][columnName.toLowerCase()];
        const rightValue = right[0][columnName.toLowerCase()];

        if (columnSorted[columnName](leftValue, rightValue, sortMethod) <= 0) {
            sortedResult.push(left.shift());
        } else {
            sortedResult.push(right.shift());
        }
    }
    return [...sortedResult, ...left, ...right];
};

export const mergeSort = (users, sortMethod = 'asc', columnName = 'Name') => {
    if (users.length <= 1) return users;

    const middle = Math.floor(users.length / 2);
    const left = mergeSort(users.slice(0, middle), sortMethod, columnName);
    const right = mergeSort(users.slice(middle), sortMethod, columnName);

    return merge(left, right, sortMethod, columnName);
};
