export const jqueryReact = ''


//https://uk.reactjs.org/docs/integrating-with-other-libraries.html
// Взаємодія зі сторонніми бібліотеками
// React можна використовувати у будь-якому веб-додатку. Його можна вбудовувати в інші додатки, та, 
//з невеликими зусиллями, інші додатки можна вбудувати в React. У цьому гайді ми розглянемо деякі з 
//більш поширених випадків використання React, а саме - інтеграцію з jQuery та Backbone. 
//Проте ці ж ідеї можна застосувати до інтеграції компонентів з будь-яким іншим кодом.

// Інтеграція з плагінами, які змінюють DOM
// Бібліотека React не знає про зміни в DOM, які були внесені поза React. Вона визначає оновлення на 
//основі внутрішнього представлення. І якщо один і той самий DOM-вузол зазнає змін від іншої бібліотеки, 
//все закінчується тим, що React дає збій.
// Це не означає, що неможливо або однозначно важко об’єднати React з іншими способами впливу на DOM. 
//Просто необхідно бути уважним до того, що робить кожен спосіб.
// Найлегше не допустити конфліктів — це запобігти оновленню React компонента. Можна зробити це через 
//рендер елементів, які React не має причин оновлювати, як-от порожній <div />.

// Як підійти до вирішення проблеми
// Для демонстрації створимо базову обгортку для узагальненого jQuery-плагіна.

// Прикріпляємо реф до кореневого DOM-елементу. Всередині componentDidMount отримуємо посилання 
//на цей елемент і у такий спосіб можемо передати його до jQuery-плагіну.

// Щоб React не оновлював DOM після монтування, повертаємо порожній <div /> з методу render(). 
//Елемент <div /> не має жодних пропсів чи дочірніх компонентів, отже, React немає жодних причин 
//для його оновлення. Таким чином, jQuery-плагін має повний контроль над цією частиною DOM:

// class SomePlugin extends React.Component {
//   componentDidMount() {
//     this.$el = $(this.el);
//     this.$el.somePlugin();
//   }

//   componentWillUnmount() {
//     this.$el.somePlugin('destroy');
//   }

//   render() {
//     return <div ref={el => this.el = el} />;
//   }
// }
// Зауважте, що ми визначили два методи життєвого циклу: componentDidMount та componentWillUnmount. 
//Багато jQuery-плагінів додають обробники подій до DOM, тож дуже важливо видаляти їх всередині 
//методу componentWillUnmount. Якщо плагін не забезпечує метод очищення, то вам, скоріш за все, потрібно
//буде створити його самостійно, пам’ятаючи про видалення всіх обробників подій, які плагін додав, 
//щоб запобігти витоку пам’яті.







