/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character !== 'object' || character === null) {
    throw new Error('invalid imput');
  }
  if (!character.name || typeof character.name !== 'string') {
    throw new Error('invalid imput: add name');
  }
  if (!character.age || typeof character.age !== 'number') {
    throw new Error('invalid imput: add age');
  }
  return characters.push(character);
}

function getCharacter(name) {
  for (const person of characters) {
    if (person.name === name) {
      return person;
    }
  }
}

function getCharactersByAge(minAge) {
  if (!minAge || typeof minAge !== 'number') {
    throw new Error('invalid imput: add number');
  }
  const answer = [];
  for (const key of characters) {
    if (key.age >= 40) answer.push(key);
  }
  return answer;
}

function updateCharacter(name, newCharacter) {
  let mister = getCharacter(name);
  mister.name = newCharacter.name;
  mister.age = newCharacter.age;
  return mister;
}

function removeCharacter(name) {
  const index = characters.findIndex((el) => el.name === name);
  if (index === -1) {
    throw new Error('the character is not found');
  }
  return characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
