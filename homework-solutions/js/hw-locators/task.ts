// Xpath/CSS: элемент с id - ‘submit’
// //*[@id='submit']
// #submit

// Xpath/CSS: все элементы с классом ‘txt’
// //*[@class='txt']
// .txt

// Xpath: первый элемент с классом ‘txt’
// //*[@class='txt'][1]

// Xpath: кнопку которая содержит текст: ‘Remove comment’
// //*[text()='Remove comment']

// Xpath: первый элемент с классом ‘one’
// //span[contains(@class, 'one')][1]

// Xpath/CSS: элемент с атрибутом ‘multitag2’ и значением  ‘on’
// //*[@multitag2='on']
// [multitag2='on']

// Xpath/CSS: всех детей элемента ‘div’ с классом ‘content’
// //div[@class='content']/*
// div.content > *

// CSS: все элементы ‘span’ и  ‘button’ с классом ‘content’
// span.content, button.content

// Xpath: используя за основу селектор //*[@id='submit'] найти элемент body
// //*[@id='submit']/ancestor::body
