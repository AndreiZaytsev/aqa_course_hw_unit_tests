// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const myData = {
  userId: 109,
  id: 109,
  title: 'mySuperTitle',
  completed: true,
};

async function createTodo(data) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status !== 201) {
      throw new Error(`Ошибка: статус ${response.status}`);
    }
    const responseData = response.json();
    for (key in responseData) {
      if (data[key] !== responseData[key]) {
        throw new Error(`Данные не совпадают по ключу: ${key}`);
      }
    }
    return responseData;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Работа функции завершена');
  }
}

createTodo(myData).then((result) => {
  console.log('Полученный объект:', result);
});
