import React from 'react';
import _ from 'lodash';
// import { useState, useEffect } from 'react';

const Lodash = () => {
    // Задание: Дана база данных студентов, каждому из которых нужно присвоить уникальный идентификатор. Разбей массив студентов на подмассивы по 3 студента в каждом.

    // const students = ['Иван', 'Мария', 'Андрей', 'Екатерина', 'Павел', 'Ольга', 'Анна'];
    // console.log(_.chunk(students, 3));

    // [['Иван', 'Мария', 'Андрей'], ['Екатерина', 'Павел', 'Ольга'], ['Анна']]
    // 1. Уникальные значения в массиве
    // Дан массив чисел, который может содержать дубликаты. Напиши функцию, которая вернёт новый массив только с уникальными значениями.

    // const numbers = [1, 2, 2, 3, 4, 4, 5];
    // console.log(_.uniq(numbers));

    // 2. Группировка объектов по значению свойства
    // Дан массив объектов, представляющих сотрудников, и их отделы. Группируй сотрудников по их отделам.

    // const employees = [
    //     { name: 'Иван', department: 'Разработка' },
    //     { name: 'Инна', department: 'Разработка' },
    //     { name: 'Иван', department: 'Маркетинг' },
    //     { name: 'Ольга', department: 'Разработка' },
    //     { name: 'Иван', department: 'Водитель' },
    // ];
    // console.log(_.groupBy(employees, 'name'));

    //   {
    //     'Разработка':[{ name: 'Иван', department: 'Разработка' }, { name: 'Ольга', department: 'Разработка' }, { name: 'Иван', department: 'Разработка' }],
    //     'Маркетинг': [{ name: 'Мария', department: 'Маркетинг' }]
    //      "Водитель": [{name: "Миша", department: "Водитель"}]
    //   }

    // const departmentGroup = (arg) => {
    // let newObj = {};
    // for (let i = 0; i < arg.length; i++) {
    //     if (arg[i].department in newObj) {
    //         newObj[arg[i].department] = [...newObj[arg[i].department], arg[i]];
    //     } else {
    //         newObj[arg[i].department] = [arg[i]];
    //     }
    // }
    // return newObj;
    // return arg.reduce((acc, el) => {
    //     if (Object.hasOwn(acc, el.department)) {
    //         acc[el.department].push(el);
    //     } else {
    //         acc[el.department] = [el];
    //     }
    //     return acc;
    // }, {});
    // };
    // console.log(departmentGroup(employees));

    // 1. Получение уникальных значений в массиве.
    // Пример: Вход: [1, 2, 2, 3, 4, 4];
    // Ожидаемый результат: [1, 2, 3, 4]
    console.log(_.uniq([1, 2, 2, 3, 4, 4]));

    // 2. Группировка объектов по значению свойства.
    // Пример: Вход: [{ age: 18 }, { age: 21 }, { age: 18 }], по ключу 'age';
    // Ожидаемый результат: { '18': [{ age: 18 }, { age: 18 }], '21': [{ age: 21 }] }
    console.log(_.groupBy([{ age: 18 }, { age: 21 }, { age: 18 }], 'age'));

    // 3. Удаление ложных значений из массива.
    // Пример: Вход: [0, 1, false, 2, '', 3];
    // Ожидаемый результат: [1, 2, 3]
    console.log(_.compact([0, 1, false, 2, '', 3]));

    // 4. Глубокое клонирование объекта.
    // Пример: Вход: { a: 1, b: { c: 2 } };
    // Изменение в копии объекта не влияет на оригинал.
    const obj = { a: 1, b: { c: 2 } };
    console.log(_.cloneDeep(obj));
    console.log(_.cloneDeep(obj) === obj);

    // 5. Найти пересечение двух массивов.
    // Пример: Вход: [1, 2, 3] и [2, 3, 4];
    // Ожидаемый результат: [2, 3]
    console.log(_.intersection([1, 2, 3], [2, 3, 4]));

    // 6. Получение значения по пути в объекте.
    // Пример: Вход: { a: { b: 2 } }, путь 'a.b';
    // Ожидаемый результат: 2
    console.log(_.get({ a: { b: 2 } }, 'a.b'));

    // 7. Преобразование строки в camelCase.
    // Пример: Вход: 'Hello World';
    // Ожидаемый результат: 'helloWorld'
    console.log(_.camelCase('Hello World'));

    // 8. Поиск объекта по критерию в массиве.
    // Пример: Вход: [{ age: 18 }, { age: 21 }] и критерий { age: 21 };
    // Ожидаемый результат: { age: 21 }
    console.log(_.find([{ age: 18 }, { age: 21 }], { age: 21 }));

    // 9. Сравнение двух объектов на глубокое равенство.
    // Пример: Вход: { a: 1, b: { c: 2 } } и { a: 1, b: { c: 2 } };
    // Ожидаемый результат: true
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    console.log(_.isEqual(obj1, obj2));

    // 10. Сортировка массива объектов по нескольким критериям.
    // Пример: Вход: [{ age: 18, name: 'Иван' }, { age: 21, name: 'Анна' }];
    // Сортировка по age и name;
    // Ожидаемый результат: массив отсортированных объектов
    const arr = [
        { age: 18, name: 'Иван' },
        { age: 21, name: 'Анна' },
    ];
    console.log(_.sortBy(arr, ['age', 'name']));

    // 11. Подсчёт количества вхождений значений в массиве.
    // Пример: Вход: [6.1, 4.2, 6.3], округление значений;
    // Ожидаемый результат: { '4': 1, '6': 2 }
    console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));

    // 12. Разбиение массива на подмассивы фиксированного размера.
    // Пример: Вход: ['a', 'b', 'c', 'd'], размер 2;
    // Ожидаемый результат: [['a', 'b'], ['c', 'd']]
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

    // 13. Создание массива значений объекта.
    // Пример: Вход: { one: 1, two: 2, three: 3 };
    // Ожидаемый результат: [1, 2, 3]
    console.log(_.values({ one: 1, two: 2, three: 3 }));

    // 14. Фильтрация уникальных объектов по значению ключа.
    // Пример: Вход: [{ name: 'Иван' }, { name: 'Иван' }, { name: 'Мария' }], ключ 'name';Ожидаемый результат: [{ name: 'Иван' }, { name: 'Мария' }]
    console.log(_.uniqBy([{ name: 'Иван' }, { name: 'Иван' }, { name: 'Мария' }], 'name'));

    // 15. Объединение нескольких объектов в один.
    // Пример: Вход: { a: 1 }, { b: 2 }, { a: 3 };
    // Ожидаемый результат: { a: 3, b: 2 }
    console.log(_.merge({ a: 1 }, { b: 2 }, { a: 3 }));

    // 16. Получение разницы между двумя массивами.
    // Пример: Вход: [2, 1] и [2, 3];
    // Ожидаемый результат: [1]
    console.log(_.difference([2, 1, 3, 7], [2, 3, 4]));

    // 17. Преобразование объектов в массив пар.
    // Пример: Вход: { a: 1, b: 2 };
    // Ожидаемый результат: [['a', 1], ['b', 2]]
    console.log(_.toPairs({ a: 1, b: 2 }));

    // 18. Преобразование массива пар в объект.
    // Пример: Вход: [['a', 1], ['b', 2]];
    // Ожидаемый результат: { a: 1, b: 2 }
    console.log(
        _.fromPairs([
            ['a', 1],
            ['b', 2],
        ])
    );

    // 19. Проверка существования пути в объекте.
    // Пример: Вход: { a: { b: 2 } }, путь 'a.b';
    // Ожидаемый результат: true
    console.log(_.has({ a: { b: 2 } }, 'a.b'));

    // 20. Ограничение вызовов функции до определённого количества в секунду.
    // Пример: Функция вызывается раз в секунду независимо от частоты вызова.
    // const [count, setCount] = useState(0);

    // const messageFn = _.throttle(() => {
    //     setCount((prevCount) => prevCount + 1);
    //     console.log('Отработало');
    // }, 1000);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         messageFn();
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [messageFn]);

    return (
        <div>
            {/* <button onClick={messageFn}>Button</button>
            <p>{count}</p> */}
        </div>
    );
};

export default Lodash;