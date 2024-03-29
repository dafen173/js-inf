export const destructuring = ''


//https://learn.javascript.ru/destructuring-assignment
//В JavaScript есть две чаще всего используемые структуры данных 
//– это Object и Array.
//Объекты позволяют нам создавать одну сущность, которая хранит 
//элементы данных по ключам, а массивы – хранить упорядоченные 
//коллекции данных.
//Но когда мы передаём их в функцию, то ей может понадобиться 
//не объект/массив целиком, а элементы по отдельности.
//Деструктурирующее присваивание – это специальный синтаксис, 
//который позволяет нам «распаковать» массивы или объекты 
//в кучу переменных, так как иногда они более удобны. 
//Деструктуризация также прекрасно работает со сложными функциями, 
//которые имеют много параметров, значений по умолчанию и 
//так далее.

//Пример деструктуризации массива:
// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]
// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor

//Если мы хотим не просто получить первые значения, 
//но и собрать все остальные, то мы можем добавить ещё один 
//параметр, который получает остальные значения, используя 
//оператор «остаточные параметры» – троеточие ("..."):

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1); // Julius
alert(name2); // Caesar

// Обратите внимание, что `rest` является массивом.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2



// Деструктуризация объекта
// Деструктурирующее присваивание также работает с объектами.

// Синтаксис:
// let {var1, var2} = {var1:…, var2:…}
// У нас есть существующий объект с правой стороны, который мы хотим разделить на переменные. 
//Левая сторона содержит «шаблон» для соответствующих свойств. В простом случае это список названий 
//переменных в {...}.

// Например:
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// Свойства options.title, options.width и options.height присваиваются соответствующим переменным. 
//Порядок не имеет значения. Вот так – тоже работает:
// // изменён порядок в let {...}
// let {height, width, title} = { title: "Menu", height: 200, width: 100 }


// Вложенная деструктуризация
// Если объект или массив содержит другие вложенные объекты или массивы, то мы можем использовать более сложные шаблоны с левой стороны, 
// чтобы извлечь более глубокие свойства.

// В приведённом ниже коде options хранит другой объект в свойстве size и массив в свойстве items. 
// Шаблон в левой части присваивания имеет такую же структуру, чтобы извлечь данные из них:

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // деструктуризация разбита на несколько строк для ясности
// let {
//   size: { // положим size сюда
//     width,
//     height
//   },
//   items: [item1, item2], // добавим элементы к items
//   title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// alert(item1);  // Cake
// alert(item2);  // Donut
// Весь объект options, кроме свойства extra, которое в левой части отсутствует, 
//присваивается в соответствующие переменные:
// В итоге у нас есть width, height, item1, item2 и title со значением по умолчанию.
// Заметим, что переменные для size и items отсутствуют, так как мы взяли сразу их содержимое.



// Умные параметры функций
// Есть ситуации, когда функция имеет много параметров, большинство из которых не обязательны. 
//Это особенно верно для пользовательских интерфейсов. Представьте себе функцию, которая создаёт меню. 
//Она может иметь ширину, высоту, заголовок, список элементов и так далее.

// Вот так – плохой способ писать подобные функции:
// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
//   // ...
// }
// В реальной жизни проблема заключается в том, как запомнить порядок всех аргументов. 
//Обычно IDE пытаются помочь нам, особенно если код хорошо документирован, но всё же… 
//Другая проблема заключается в том, как вызвать функцию, когда большинство параметров передавать 
//не надо, и значения по умолчанию вполне подходят.

// Разве что вот так?
// // undefined там, где подходят значения по умолчанию
// showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
// Это выглядит ужасно. И становится нечитаемым, когда мы имеем дело с большим количеством параметров.

// На помощь приходит деструктуризация!
// Мы можем передать параметры как объект, и функция немедленно деструктурирует его в переменные:
// // мы передаём объект в функцию
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...и она немедленно извлекает свойства в переменные
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – взято из options,
//   // width, height – используются значения по умолчанию
//   alert( `${title} ${width} ${height}` ); // My Menu 200 100
//   alert( items ); // Item1, Item2
// }

// showMenu(options);



//https://medium.com/@stasonmars/%D0%B4%D0%B5%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2-es6-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-b865bb71f376
// Что такое деструктуризация?
// Деструктуризация просто подразумевает разбивку сложной 
//структуры на простые части. В JavaScript, таковая сложная 
//структура обычно является объектом или массивом. 
//Используя синтаксис деструктуризации, вы можете выделить 
//маленькие фрагменты из массивов или объектов. Такой синтаксис 
//может быть использован для объявления переменных или их 
//назначения. Вы также можете управлять вложенными структурами, 
//используя уже синтаксис вложенной деструктуризации.



import { contents } from "./contents";
