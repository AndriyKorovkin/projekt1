// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n.
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
// 5. Задание сделать не смог! Не понимаю каким образом должен пользователь прервать... Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.


//3.................................................

let n = prompt('Введите, пожалуйста, число', 1);

let k = prompt('Введите, пожалуйста, число для просчета кратности', 2);

function isMultiple (n) {
//    let m = 1;
//    while (m <= n){
//        if(m % k === 0) {
//            console.log(m);
//        }
//       m++;
//    }

    for (let m=1; m<=n; m++) {
        if(m % k===0) {
            console.log(m);
        }
    }
}
isMultiple(n,k);

