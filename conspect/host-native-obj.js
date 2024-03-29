export const hostNativeObj = ''


// В чем разница между host и native объектами
// Объекты можно разделить на эти две основные категории в зависимости от среды и языка.

// объекты host: зависящие от среды - например браузер предоставляет определенные объекты, 
// такие как window, node предоставляет NodeList и пр.;
// собственные / встроенные объекты (native): стандартные объекты, предоставляемые JS, 
// иногда называемые глобальными объектами; JS в основном создается с помощью этих 
//категоризированных нативных объектов (String, Number и пр.).


// Собственные объекты: Object (конструктор), Date, Math, parseInt, eval, строковые методы, 
//такие как indexOf и replace, методы массивов,...

// Объекты хоста (при условии среды браузера): window, document, location, history, XMLHttpRequest, 
//setTimeout, getElementsByTagName, querySelectorAll,...


import { contents } from "./contents"


