/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(arr) {
  const fullLength = arr.length + 1;
  const arithmeticalSum = (fullLength * (fullLength + 1)) / 2;
  const currentSum = arr.reduce((acc, sum) => acc + sum, 0);
  return arithmeticalSum - currentSum;
}

export { findMissingNumber };
