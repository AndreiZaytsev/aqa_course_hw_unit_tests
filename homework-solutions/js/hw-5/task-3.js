/**
 * РЎРѕР·РґР°С‚СЊ СЃС‚СЂРѕРєСѓ СЃ РёРЅС„РѕСЂРјР°С†РёРµР№ Рѕ РєРѕР»РёС‡РµСЃС‚РІРµ РіР»Р°СЃРЅС‹С… Рё СЃРѕРіР»Р°СЃРЅС‹С… Р±СѓРєРІ РІ СЃР»РѕРІРµ.
 * РџРµСЂРµРјРµРЅРЅР°СЏ `word` СѓР¶Рµ СЃРѕР·РґР°РЅР° Рё СЃРѕРґРµСЂР¶РёС‚ СЃС‚СЂРѕРєСѓ СЃРѕ СЃР»РѕРІРѕРј.
 * РћР¶РёРґР°РµРјС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РґР»СЏ `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowelsCount = 0;
let consonantslsCount = 0;
let vowelsAndConsonantsResult = '';
let vovels = 'AaEeIiOoUuYy';
for (let i = 0; i <= word.length - 1; i++) {
  const char = word[i]
  if (vovels.includes(char)) vowelsCount++;
  else {
    consonantslsCount++;
  }
  vowelsAndConsonantsResult = `hello contains ${vowelsCount} vowels and ${consonantslsCount} consonants`;

}

export { vowelsAndConsonantsResult };
