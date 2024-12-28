export const COLUMN_NAMES = ['naMe', 'sUrNamE', 'aGE', 'eMAil', 'actions'].map((column) => column[0].toUpperCase().concat(column.slice(1).toLowerCase()));

export const COLUMN_NAMES_LOWER_CASE = ['name', 'surname', 'age', 'email'];

export const INPUT_TYPES = ['text', 'text', 'number', 'email'];

export const initialState = {
    users: [],
    currentVisibleUsers: [],
    modalActive: false,
    isDisabledBtn: true,
    currentPage: 1,
    limit: 5,
    selectedSort: 'buble',
    isEdit: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
        case 'SET_CURRENT_VISIBLE_USERS':
            return { ...state, currentVisibleUsers: action.payload };
        case 'SET_MODAL_ACTIVE':
            return { ...state, modalActive: action.payload };
        case 'SET_IS_DISABLED_BTN':
            return { ...state, isDisabledBtn: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_LIMIT':
            return { ...state, limit: action.payload };
        case 'SET_SELECTED_SORT':
            return { ...state, selectedSort: action.payload };
        case 'SET_IS_EDIT':
            return { ...state, isEdit: action.payload };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.payload.id ? action.payload.updatedUser : user)),
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state;
    }
};
