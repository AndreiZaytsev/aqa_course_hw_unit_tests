/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrs) {
  let result = [];
  return result.concat(...arrs);
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let sentenceArr = sentence.split(' ');
  let resultArr = [];

  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] !== '') {
      if (resultArr.length === 0) {
        resultArr.push(sentenceArr[i].toLowerCase());
      } else {
        resultArr.push(sentenceArr[i][0].toUpperCase() + sentenceArr[i].slice(1).toLowerCase());
      }
    }
  }
  return resultArr.join('_');
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0; // fib(0)
  let b = 1; // fib(1)

  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
}

export { mergeArrays, fibonacci, devideBy };
