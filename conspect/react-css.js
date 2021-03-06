export const reactCss = ''


//https://medium.com/@stasonmars/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D1%82%D1%80%D1%91%D0%BC-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2-react-2ca5c0c7464b

// Итак, смотрите. Я никак не могу узнать того, сколько руководств по стилизации в React вы уже просмотрели, 
//хотя я предполагаю, что не так уж и много. А если вы вообще не видели какого-либо руководства по этой теме, 
//то вы уже наверное задаётесь вопросом, что это это такое и как это лучше делать.

// Итак, мы тут для того, что узнать как стилизовать компоненты в React и когда вы закончите читать этот пост, 
//вы точно будете знать то, как это правильно делать.

// Чего ожидать
// В этой статье мы собираемся увидеть несколько разных способов того, как мы можем стилизовать 
//React компоненты. Вот методы стилизации, которые мы изучим:

// Инлайновая стилизация

// Styled Components

// CSS Modules

// Мы будем использовать компонент, который является частью todo приложения, чтобы объяснить каждый из методов.

// Метод 1: Инлайновая стилизация React компонентов
// Если вы знакомы с простым HTML, то вы уже знаете, что можно добавлять ваши стили CSS инлайново. 
//Это почти также, как и в React.
// Мы можем добавлять инлайновые стили компонентам, которые хотим отрендерить. Такие стили записаны 
//как атрибуты и передаются элементу. Давайте стилизуем части нашего компонента с использованием 
//инлайновых стилей.

// Итак, мы только что добавили инлайновые стили для внешних <div> и <h2>. Итак, вот несколько вещей, 
//которые нужно знать по этому поводу.

// Первое это то, что тут две фигурные скобки. То, что мы рендирим — написано на JSX и для JS выражений, 
//которые будут использоваться в JSX, они должны быть вставлены в фигурные скобки.
// Первые фигурные скобки вставляют JavaScript в JSX. Внутренние фигурные скобки создают объект литерал. 
//Стили передаются как объект литералы к элементу.
// JSX это препроцессорный шаг, который добавляет XML синтаксис JavaScript. Вы можете использовать 
//React и без JSX, но JSX делает работу с React куда более элегантной. Как и XML, JSX теги имеют имена, 
//атрибуты и потомков.

// Следующее, на что нужно обратить внимание, это то, что свойства разделяются запятой. 
//Это так, потому что то, что мы передаем это по-факту объект. А так как это атрибут JavaScript, 
//атрибуты пишутся горбатым регистром и не разделяются тире.

// Теперь, в коде выше, мы добавили несколько свойств элементам, которые мы стилизовали. 
//Однако, представьте, если бы нам надо было добавить больше и больше стилей для элемента. 
//И это тот момент, когда инлайновые стили косячат, так как не будут выглядеть чистыми.

// Но есть обходной путь для этого случая. Мы можем создать объект переменную и передать её элементам. 
//Давайте так сделаем.

// Создаем объект переменную стилей
// Мы сделаем это также, как и при создании простого JavaScript объекта. Этот объект затем передастся 
//атрибуту стиля элемента, который мы бы хотели стилизовать.

// Так что вместо добавления стилей напрямую инлайново, как мы делали в предыдущем примере, мы просто 
//передадим объект переменные:

// В коде выше, мы создали три объект перменные: TodoComponent, Header и ErrorMessage. 
//Затем мы передали эти переменные элементам, вместо того, чтобы напечатать стили вручную.

// Нам не нужно использовать двойные фигурные скобки в элементе, так как эти переменные и есть объекты 
//сами по себе.

// Если вы взгляните на свойства объектов, то горбатый регистр будет конвертирован в тире, во время компиляции.
// Для примера:

// backgroundColor: "#44014C",
// minHeight: "200px",
// boxSizing: "border-box"
// В чистом CSS это будет записано так:
// background-color: #44014C;
// min-height: 200px;
// box-sizing: border-box;
// Такое изменение применяется только на именах свойств, а не на их значениях.

// Так же вы можете передать переменную как значение для свойства. Так что, мы можем сделать так:

// const spacing = "10px 20px";
// const Header = {
// margin: spacing,
// padding: spacing
// // …
// }
// Во многих JavaScript средах, создание глобального объекта переменной может быть плохой практикой, 
//но для React это норма. Пока файлы не видимы для других файлов, пока они не импортированы, 
//мы можем создать столько объект переменных, сколько захотим и даже с одним и тем же именем, 
//и это не вызовет какого-либо конфликта.

// Распределяем стили по множеству React компонентам
// Стилевые объекты и компоненты не обязательно должны быть одним и тем же файлом. 
//Мы можем создать отдельный js файл для наших стилей, экспортировать эти стили и затем импортировать 
//их компоненту, с которым мы хотим его использовать. Делая так, мы делаете стили многоразовыми 
//для нескольких компонентов. Давайте сделаем это для нашего компонента.
// Во первых, мы создадим отдельный js файл под названием styles.js. Затем добавим эти стили:
// В коде выше, мы можем выбрать экспорт каждого стиля индивидуально, но это будет означать и 
//их индивидуальный импорт. Это может быть довольно утомительно, если у вас в файле много стилевых объектов.
// Следовательно, имеет смысл, создание объекта, который содержит все стили. Этот объект 
//экспортируется и импортируется единожды тому компоненту, на котором он будет использоваться. 
//Итак, давайте сделаем это:
// На 4-й строке, там где мы импортируем стилевой объект. Этот объект затем используется для 
//стилизации компонентов нашего React приложения и использует так, как мы бы использовали любой 
//JavaScript объект.
// То, что обязательно нужно усечь из этого, это то, что стили могут использоваться и 
//переиспользоваться во многих компонентах. Стилям просто надо быть импортированными и добавленными 
//атрибуту стиля.
// Вот и всё по поводу инлайновой стилизации. Давайте перейдем к следующему методу.

//ПРИМЕР
// const TodoComponent = {
//     width: "300px",
//     margin: "30px auto",
//     backgroundColor: "#44014C",
//     minHeight: "200px",
//     boxSizing: "border-box"
//   }
  
//   const Header = {
//     padding: "10px 20px",
//     textAlign: "center",
//     color: "white",
//     fontSize: "22px"
//   }
  
//   const ErrorMessage = {
//     color: "white",
//     fontSize: "13px"
//   }
  
//   const styles = {
//     TodoComponent: TodoComponent,
//     Header: Header,
//     ErrorMessage: ErrorMessage
//   }



//   import React, { Component } from "react";

// // Import the styles
// import {styles} from "./styles";

// class ToDoApp extends React.Component {
//   // ...
//   render() {
//     return (
//       <div style={styles.TodoComponent}>
//         <h2 style={styles.Header}>ToDo</h2>
//         <div>
//           <Input onChange={this.handleChange} />
//           <p style = {styles.ErrorMessage}>{this.state.error}</p>
//           <ToDoList value={this.state.display} />
//         </div>
//       </div>
//     )
//   }
// }


//==============================================================================================



// Метод 2: Styled Components
// При помощи Styled Components мы можем писать простой CSS в нашем JavaScript файле. Это означает то, 
//что вы можете использовать весь функционал CSS, даже такой как медиа запросы, псевдо-селекторы, 
//вложения и т.п в JavaScript.

// Styled-components использует шаблонные строки для стилизации компонентов. Это означает то, что 
//когда вы определяете ваши стили, вы на самом деле создаете обычный React компонент, который имеет 
//ваши стили, которые уже прикреплены к нему.

// Используя стилизованные компоненты, мы можем создать переиспользуемые компоненты со стилями. 
//Вообще это довольно интересно и пример ниже, даст нам много полезного.

// Для начала, нам надо это установить. Так что запустите следующий код в директории React.

// $ npm install --save styled-components
// Давайте вернемся к нашему to-do приложению и сделаем стилизацию с помощью styled-components. 
//Во первых, мы импортируем пакет styled-components:

// import styled from 'styled-components';
// И начнем прямо сразу его использовать. Для начала создадим стилизованный компонент, затем увидим, 
//как мы можем его использовать:

// const TodoComponent = styled.div`
// background-color: #44014C;
// width: 300px;
// min-height: 200px;
// margin: 30px auto;
// box-sizing: border-box;
// `;
// Итак, выше мы создали компонент, который мы можем использовать одинаково в любом React компоненте. 
//Однако, обратите внимание, что мы используем чистый CSS в JavaScript файле. Далее, давайте вставим 
//этот компонент для использования:

// В коде выше, мы использовали стилизованный компонент, который мы создали на шестой строке, 
//будто бы мы будем использовать любой другой HTML элемент. Единственная разница тут в том, что он 
//идет со своими предопределенными стилями.

// Мы можем сделать совершенно тоже самое для других частей компонента:


// Давайте рассмотрим ещё пример.

// После того, как объект styled импортирован, давайте создадим стиль для кнопки:

// const Button = styled.button`
// font-size: 1.5em;
// background-color: black;
// color: white;
// `;
// Button теперь является компонентом React во всем своем величии.

// Мы создали его, используя функцию стилизации объекта, под названием button и передав ему несколько 
//CSS свойств при помощи шаблонных строк.

// Теперь этот компонент может быть отрендерен в контейнере, с использованием обычного синтаксиса React:

// render(
// <Button />
// )
// Стилизованные компоненты дают другим функциям создавать ещё одни компоненты, 
//а не только button. Например section, h1, input и многие другие.

// Синтаксис с обратным апострофом может показаться сначала странным, но это всё таки шаблонные 
//строки и чистый JavaScript, а также способ передачи аргумента функции.

// Использование props для кастомизации компонентов
// Когда вы передаете какие-либо props к Styled Components, то они передадутся нижестоящим DOM узлам.

// Для примера, вот как мы передарим placeholder и type props для компонента input:

// const Input = styled.input`
// //…
// `;
// render(
// <div>
// <Input placeholder="…" type="text" />
// </div>
// );
// Это сделает то, о чем вы подумали, вставит эти props как HTML атрибуты.

// Props вместо того, чтобы вслепую быть переданными DOM, могут быть также использованы для 
//кастомизации компонента, основываясь на значении prop. Вот пример:

// const Button = styled.button`
// background: ${props => props.primary ? 'black' : 'white'};
// color: ${props => props.primary ? 'white' : 'black'};
// `;
// render(
// <div>
// <Button>A normal button</Button>
// <Button>A normal button</Button>
// <Button primary>The primary button</Button>
// </div>
// );
// В примере выше, назначение prop primary изменяет цвет кнопки.

// Расширенная стилизация
// Если у вас есть один компонент и вы хотите создать такой же, но только немного по-другому стилизованный, 
//вы можете использовать extend:

// const Button = styled.button`
// color: black;
// //…
// `;
// const WhiteButton = Button.extend`
// color: white;
// `;
// render(
// <div>
// <Button>A black button, like all buttons</Button>
// <WhiteButton>A white button</WhiteButton>
// </div>
// );
// Это обычный CSS
// В Styled Components, вы можете использовать CSS, который вы уже знаете и любите. Это просто чистый 
//и обычный CSS. Это не всевдо-CSS и не иналайновый CSS со своими ограничениями.

// Вы можете смело использовать медиа запросы, вложения и все, что вам захочется.

// Styled Components также автоматически добавляют вендорные префиксы, так что вам не надо беспокоиться 
//об этой проблеме.



//==============================================================================

// Метод 3: CSS модули
// CSS модуль это файл CSS, в котором все имена классов и анимации имеют локальную область видимости по-дефолту. 
//Обратите на это особое внимание. Давайте это немного разберем.

// Имена классов CSS и имена анимации имеют глобальную область видимомости по-дефолту. 
//Это может привести к конфликтам стилей, особенно в больших CSS. Попросту один стиль может быть перезаписан 
//другим стилем. Это именно та проблема, которую решают CSS модули. CSS классы доступны только внутри 
//компонента, в котором он используется.

// CSS модуль это на самом деле .css файл, который скомпилирован. Будучи скомпилированным он выдает 
//две выдачи. Первая это CSS, который являет собой модифицированную версию написанного CSS с переименованными 
//классами. А другая, это JavaScript объект, который формирует исходный CSS с уже переименованными классами.

// Давайте посмотрим на пример того, как это работает. Создаем CSS класс в модуле для примера сообщения ошибки. 
//Имя нашего модуля это styles.css:

// .error-message {
// color: red;
// font-size: 16px;
// }
// Будучи скомпилированным, это выдаст нам что-то типа такого:

// .error-message_jhys {
// color: red;
// font-size: 16px;
// }
// jays это просто приставка, чтобы придать уникальности идентификатору этого класса. 
//Как говорилось ранее, создается JS объект, который может быть импортирован в React файл и далее свободно 
//использоваться:

// {
// error-message: error-message_jhys
// }
// Давайте посмотрим на то, как мы можем это сейчас использовать:

// import styles from ‘./styles.css’;
// class Message extends React.Component {
// // …
// render() {
// return (
// <p className = {styles.error-message}>I am an error message</p>
// )
// }
// }
// Помните, что главной целью CSS модулей является создание классов в локальной области видимости и 
//избежание конфликтов с именами.

// Заключение
// Итак вот они, три способа стилизации React компонента. Обычно все три метода довольно полезны 
//и их использование зависит от размера проекта над которым вы работаете.



