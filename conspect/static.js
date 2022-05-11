export const staticItem = 'https://learn.javascript.ru/static-properties-methods'


//Статические методы
//Ключевое слово static используется в классах для объявления 
//статических методов. 
//Статические методы - это функции в классе, которая принадлежит
// объекту класса 
//и недоступна ни одному экземпляру этого класса.

class Repo {
  static getName() {
    return "Repo name"
  }
}

// Обрати внимание, что нам не нужно было создавать экземпляр класса Repo.
console.log(Repo.getName()) // Repo name

let r = new Repo();
console.log(r.getName()) // Uncaught TypeError: r.getName is not a function








