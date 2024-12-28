// const validateTypes = {
//     // name: validateName(),
//     // surname: validateSurname(),
//     // age: validateAge(),
//     // email: validateEmail()
// };

export const validation = (validatedValue, inputName) => {
    switch (inputName) {
        case 'Name':
            if (validatedValue.length >= 2 && validatedValue.length <= 30) {
                if (validatedValue !== validatedValue[0].toUpperCase().concat(validatedValue.slice(1).toLowerCase())) {
                    return 'Введите имя с заглавной буквы. пример: Иван';
                }
                if (validatedValue !== validatedValue.trim()) {
                    return 'Необходимо убрать пробелы в начале и в конце';
                }
            } else {
                return 'Введите от 2 до 30 символов';
            }
            break;
        case 'Surname':
            if (validatedValue.length >= 2 && validatedValue.length <= 30) {
                if (validatedValue !== validatedValue[0].toUpperCase().concat(validatedValue.slice(1).toLowerCase())) {
                    return 'Введите имя с заглавной буквы. пример: Иванов';
                }
                if (validatedValue !== validatedValue.trim()) {
                    return 'Необходимо убрать пробелы в начале и в конце';
                }
            } else {
                return 'Введите от 2 до 30 символов';
            }
            break;
        case 'Age':
            if (isNaN(+validatedValue)) {
                return 'Введите только числа';
            }
            if (!Number.isInteger(+validatedValue)) {
                return 'Введите целое число';
            }
            if (+validatedValue < 1 || +validatedValue > 120) {
                return 'Введите числа от 1 до 120';
            }
            break;
        case 'Email':
            const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailReg.test(validatedValue)) {
                return 'Введите корректный адрес электронной почты';
            }
            break;

        default:
            break;
    }
};
