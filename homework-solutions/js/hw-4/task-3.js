/*

(РќР• РћР‘РЇР—РђРўР•Р›Р¬РќРћ)

РџСЂРµРѕР±СЂР°Р·РѕРІР°С‚СЊ Task 2 С‚Р°РєРёРј РѕР±СЂР°Р·РѕРј, С‡С‚РѕР±С‹ Р·РЅР°С‡РµРЅРёРµ РќРђРџР Р�РњР•Р  '2' (С‚.Рµ. Р›Р®Р‘РђРЇ СЃС‚СЂРѕРєР° РІ РєРѕС‚РѕСЂРѕР№ Р»РµР¶Р°С‚ РўРћР›Р¬РљРћ Р¦Р�Р¤Р Р«) РїСЂРѕРїСѓСЃРєР°Р»РѕСЃСЊ, 
  РїСЂРµРѕР±СЂР°Р·РѕРІС‹РІР°СЏСЃСЊ РІ number

*/

let minAge = 18;
let maxAge = 60;
let age = "43a";
if (isNaN(age)) {
  console.log("Incorrect data type");
} else {
  age = Number(age);
    if (age < minAge) {
    console.log(
      `You don't have access cause your age is ${age}. It's less then ${minAge}`
    );
  } else if (age >= minAge && age < maxAge) {
    console.log("Welcome  !");
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
}
