export const editPrototype = ''

//https://learn.javascript.ru/native-prototypes#native-prototype-change

// Изменение встроенных прототипов
// Встроенные прототипы можно изменять. Например, если добавить метод к String.prototype, 
//метод становится доступен для всех строк:

// String.prototype.show = function() {
//   alert(this);
// };

// "BOOM!".show(); // BOOM!
// В течение процесса разработки у нас могут возникнуть идеи о новых встроенных методах, 
//которые нам хотелось бы иметь, и искушение добавить их во встроенные прототипы. 
//Это плохая идея.

// Важно:
// Прототипы глобальны, поэтому очень легко могут возникнуть конфликты. 
//Если две библиотеки добавляют метод String.prototype.show, то одна из них перепишет метод другой.
// Так что, в общем, изменение встроенных прототипов считается плохой идеей.

// В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. 
//Это создание полифилов.

// Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, 
//но ещё не поддерживается текущим движком JavaScript.
// Тогда мы можем реализовать его сами и добавить во встроенный прототип.

if (!String.prototype.repeat) { // Если такого метода нет. ТАК МОЖНО ОБЕЗОПАСИТЬ ОТ ВОЗМОЖНОГО 
  //КОНФЛИКТА ПРИ ПЕРЕЗАПИСИ СОВПАДАЮЩИХ ПО ИМЕНИ МЕТОДОВ!!!!
    // добавляем его в прототип
      String.prototype.repeat = function(n) {
      // повторить строку n раз
        // на самом деле код должен быть немного более сложным
      // (полный алгоритм можно найти в спецификации)
      // но даже неполный полифил зачастую достаточно хорош для использования
      return new Array(n + 1).join(this);
    };
  }
  
  alert( "La".repeat(3) ); // LaLaLa



  
