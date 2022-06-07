export const itemHandlerAddItem = ''


// Оберіть варіант, у якому при зверненні до методу helper не виведеться помилка. 
//(itemHandler.addItem(2)):

// a) - CORRECT ANSWER!!!
// const itemHandler = {
//   addItem: function (arg) {
//     let a = this.helper(arg);
//   },
//   helper: (prop) => {
//     return prop;
//   },
// };

// b)
// const itemHandler = {
//   addItem: (arg) => {
//     let a = this.helper(arg);
//   },
//   helper: (prop) => {
//     return prop;
//   },
// };

// c) Обидва правильні


// У варіанті b) ми визначаємо функцію в глобальному контексті, а не в контексті об'єкта, а 
//оскільки в globalThis ми не визначили метод helper(), то буде помилка this.helper is 
//not a function. Значить, варіант b) неправильний, відповідно і відповідь c) - теж. 
//Залишається тільки a), ну а ми й без цього вже знаємо, що якщо метод визначений через function, 
//то контекст буде той, де ми цей метод викличемо, в даному випадку на об'єкті itemHandler.


