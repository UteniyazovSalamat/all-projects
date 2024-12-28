const compareFn = (a, b, sortMethod) => {
    if (sortMethod === 'asc') {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    } else {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    }
};

export const columnSorted = {
    Name: (a, b, sortMethod) => compareFn(a, b, sortMethod),
    Surname: (a, b, sortMethod) => compareFn(a, b, sortMethod),
    Age: (a, b, sortMethod) => compareFn(+a, +b, sortMethod),
    Email: (a, b, sortMethod) => compareFn(a, b, sortMethod),
};
