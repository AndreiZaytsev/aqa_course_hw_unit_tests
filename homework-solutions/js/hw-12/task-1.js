function consoler() {
  console.log('test');
}

function delayTwoSeconds(func, time) {
  setTimeout(() => {
    func();
  }, time);
}

delayTwoSeconds(consoler, 2000);

const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise.then((result) => {
  console.log(result);
});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promise = new Promise((resolve, reject) => {
  reject('Promise failed');
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

async function promiseNumber(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
}
promiseNumber(3).then((result) => {
  console.log(result);
});

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
  console.log(values);
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
  console.log(values);
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function handlePromiseAll() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error('Ошибка в Promise.all:', error);
  }
}

async function handlePromiseAllSettled() {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log(`Статус: ${result.status}, Результат: ${result.value}`);
      } else {
        console.log(`Статус: ${result.status}, Ошибка: ${result.reason}`);
      }
    });
  } catch (error) {
    console.error('Ошибка в Promise.allSettled:', error);
  }
}

handlePromiseAll();
handlePromiseAllSettled();
