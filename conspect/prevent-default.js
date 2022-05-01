export const preventDefaultItem = ''




// Действия браузера по умолчанию
// Многие события автоматически влекут за собой действие браузера.

// Например:

// Клик по ссылке инициирует переход на новый URL.
// Нажатие на кнопку «отправить» в форме – отсылку её на сервер.
// Зажатие кнопки мыши над текстом и её движение в таком состоянии – инициирует его выделение.
// Если мы обрабатываем событие в JavaScript, то зачастую такое действие браузера нам не нужно. К счастью, его можно отменить.

// Отмена действия браузера
// Есть два способа отменить действие браузера:

// Основной способ – это воспользоваться объектом event. Для отмены действия браузера существует стандартный метод event.preventDefault().
// Если же обработчик назначен через on<событие> (не через addEventListener), то также можно вернуть false из обработчика.
// В следующем примере при клике по ссылке переход не произойдёт:

// <a href="/" onclick="return false">Нажми здесь</a>
// или
// <a href="/" onclick="event.preventDefault()">здесь</a>




// Действий браузера по умолчанию достаточно много:

// mousedown – начинает выделять текст (если двигать мышкой).
// click на <input type="checkbox"> – ставит или убирает галочку в input.
// submit – при нажатии на <input type="submit"> или при нажатии клавиши Enter в форме данные отправляются на сервер.
// keydown – при нажатии клавиши в поле ввода появляется символ.
// contextmenu – при правом клике показывается контекстное меню браузера.
// …и многие другие…
// Все эти действия можно отменить, если мы хотим обработать событие исключительно при помощи JavaScript.

// Чтобы отменить действие браузера по умолчанию, используйте event.preventDefault() или return false. Второй метод работает, только если обработчик назначен через on<событие>.

// Опция passive: true для addEventListener сообщает браузеру, что действие по умолчанию не будет отменено. Это очень полезно для некоторых событий на мобильных устройствах, таких как touchstart и touchmove, чтобы сообщить браузеру, что он не должен ожидать выполнения всех обработчиков, а ему следует сразу приступать к выполнению действия по умолчанию, например, к прокрутке.

// Если событие по умолчанию отменено, то значение event.defaultPrevented становится true, иначе false.

// Сохраняйте семантику, не злоупотребляйте
// Технически, отменяя действия браузера по умолчанию и добавляя JavaScript, мы можем настроить поведение любого элемента. Например, мы можем заставить ссылку <a> работать как кнопку, а кнопку <button> вести себя как ссылка (перенаправлять на другой URL).

// Но нам следует сохранять семантическое значение HTML элементов. Например, не кнопки, а тег <a> должен применяться для переходов по ссылкам.

// Помимо того, что это «хорошо», это делает ваш HTML лучше с точки зрения доступности для людей с ограниченными возможностями и с особых устройств.

// Также, если мы рассматриваем пример с тегом <a>, то обратите внимание: браузер предоставляет возможность открывать ссылки в новом окне (кликая правой кнопкой мыши или используя другие возможности). И пользователям это нравится. Но если мы заменим ссылку кнопкой и стилизуем её как ссылку, используя CSS, то специфичные функции браузера для тега <a> всё равно работать не будут.




