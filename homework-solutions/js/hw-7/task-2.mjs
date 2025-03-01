/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  } else {
    const newWord = word.split('').reverse().join('');
    return newWord.toLowerCase() === word.toLowerCase();
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (sentence === '' || typeof sentence !== 'string') {
    return [];
  }
  const sentenceArr = sentence.split(' ');
  let longestWord = [];
  let maxLength = 0;
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length >= maxLength) {
      maxLength = sentenceArr[i].length;
    }
  }
  for (let words of sentenceArr) {
    if (words.length === maxLength) {
      longestWord.push(words);
    }
  }

  return longestWord;
}

export { isPalindrom, findLongestWords };
