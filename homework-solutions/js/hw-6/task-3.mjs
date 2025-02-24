/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];


for (let i = 0; i < myArray.length; i++) {
  let lastIndex = myArray.lastIndexOf(myArray[i]);
  while (lastIndex !== i) {
    myArray.splice(lastIndex, 1);
    lastIndex = myArray.lastIndexOf(myArray[i]);
  }
}

unique = [...myArray];
export { unique };
