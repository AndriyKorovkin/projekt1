/**
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:
    1.  Создайте пустой объект user.
    2.  Добавьте свойство name со значением Kato.
    3.  Добавьте свойство group со значением fe0303.
    4.  Измените значение свойства name на Julia.
    5.  Удалите свойство name из объекта.
    6.  Создайте копию обьекта user.
    7.  Проверьте, что созданный обьект не пустой.
    8.  Узнайте количество свойств в нем.
    9.  Измените в копии свойство name на Kato.
    10. Сравните свойства этих двух обьектов и придумайте структуру данных для отображения их разницы.
*/
const propName = 'age';

const student = {
    name: 'Kato',
    group: 'fe0303',
    'student of user group': 'Front End Developer',
    [propName]: 29
};
student.name = 'Andriy';

console.log(student);
console.log([propName]);
console.log(student[propName]);


delete student[propName];
console.log(student);

student[propName] = 32;

console.log(student);

const student2 = {};

for (const key in student) {
    console.log(key)

}

const dStudent2 = student;
console.log(dStudent2===student,dStudent2,student);

dStudent2.name = 'Alex';
console.log (student);

const studentCopy = Object.assign({},student);

console.log (studentCopy === student, studentCopy);

console.log(studentCopy);

function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }

    return true;
}

console.log (isEmpty(studentCopy)) === false;
console.log (isEmpty( {} )) === true;
console.log (isEmpty( {vlad: true} )) === false;


function keyCount (counter) {
    let count = 0

    for (const key in counter) {
        count++;
    }

    return count;

}

console.log (keyCount(studentCopy));
console.log (keyCount( {} ));
console.log (keyCount( {vlad: true} ));

const arr = ['hello', 'money', 'qwerty', 12, true, 766]; //масив упорядоченные обьекты.

console.log (arr);

console.log(arr[5]);
arr[6] = 298;
console.log (arr);
arr.push('apple');
console.log (arr);
const deletedEll = arr.pop();
console.log(arr, arr.length,deletedEll);

const firstEllDell = arr.shift();
console.log(arr, arr.length,firstEllDell);
arr.unshift(deletedEll);
console.log(arr, arr.length,firstEllDell);
arr.push(firstEllDell);
console.log(arr, arr.length);

function includes(arr, valeu){
    for(let i=0; i<arr.length; i++)
            if (arr[i] === valeu ) {
                return true;
            }
        return false;
}

console.log(includes(arr, 12)) ;
console.log(includes(arr, 15));

console.log(arr.includes(12));
console.log(arr.includes('apple'));
arr.push(99);
console.log(arr);



