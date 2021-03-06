export const cookie = 'https://itchief.ru/javascript/cookies'

// https://learn.javascript.ru/cookie
//Cookies - это технология, позволяющая сайтам сохранять в браузере 
//небольшую порцию данных (до 4Кбайт)

// Обычно эти данные используются на сайте для того, чтобы:
// "узнать" (идентифицировать) пользователя (эмулировать постоянное 
// соединение с сервером);
// сохранить информацию о просмотренных страницах или товаров;
// осуществить простую защиту счётчиков и системы голосования от 
// накрутки;
// запомнить настройки интерфейса, расположение блоков, товара, 
// добавленного в корзину и много другого.

// Куки, document.cookie
// Куки – это небольшие строки данных, которые хранятся 
//непосредственно в браузере. Они являются частью HTTP-протокола, 
//определённого в спецификации RFC 6265.

// Куки обычно устанавливаются веб-сервером при помощи заголовка 
//Set-Cookie. Затем браузер будет автоматически добавлять их 
//в (почти) каждый запрос на тот же домен при помощи заголовка Cookie.

// Один из наиболее частых случаев использования куки – это 
//аутентификация:
// При входе на сайт сервер отсылает в ответ HTTP-заголовок Set-Cookie 
//для того, чтобы установить куки со специальным уникальным идентификатором сессии («session identifier»).
// Во время следующего запроса к этому же домену браузер посылает на сервер HTTP-заголовок Cookie.
// Таким образом, сервер понимает, кто сделал запрос.
// Мы также можем получить доступ к куки непосредственно из браузера, используя свойство document.cookie.

// Куки имеют множество особенностей и тонкостей в использовании, и в этой главе мы подробно с ними разберёмся.

// Чтение из document.cookie
// Хранит ли ваш браузер какие-то куки с этого сайта? Посмотрим:

// // На javascript.info мы используем сервис Google Analytics для сбора статистики,
// // поэтому какие-то куки должны быть
// alert( document.cookie ); // cookie1=value1; cookie2=value2;...
// Значение document.cookie состоит из пар ключ=значение, разделённых ;. Каждая пара представляет собой 
//отдельное куки.

// Чтобы найти определённое куки, достаточно разбить строку из document.cookie по ;, и затем найти 
//нужный ключ. Для этого мы можем использовать как регулярные выражения, так и функции для обработки массивов.
// Оставим эту задачу читателю для самостоятельного выполнения. Кроме того, в конце этой главы 
//вы найдёте полезные функции для работы с куки.

// Запись в document.cookie
// Мы можем писать в document.cookie. Но это не просто данные, а акcессор (геттер/сеттер). 
//Присваивание обрабатывается особым образом.

// Запись в document.cookie обновит только упомянутые в ней куки, но при этом не затронет все остальные.

// Например, этот вызов установит куки с именем user и значением John:
// document.cookie = "user=John"; // обновляем только куки с именем 'user'
// alert(document.cookie); // показываем все куки
// Если вы запустите этот код, то, скорее всего, увидите множество куки. Это происходит, потому что операция 
//document.cookie= перезапишет не все куки, а лишь куки с вышеупомянутым именем user.

// Технически, и имя и значение куки могут состоять из любых символов, для правильного форматирования 
//следует использовать встроенную функцию encodeURIComponent:
// // специальные символы (пробелы), требуется кодирование
// let name = "my name";
// let value = "John Smith"
// // кодирует в my%20name=John%20Smith
// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
// alert(document.cookie); // ...; my%20name=John%20Smith

// Ограничения
// Существует несколько ограничений:

// После encodeURIComponent пара name=value не должна занимать более 4Кб. Таким образом, мы не можем хранить 
//в куки большие данные.
// Общее количество куки на один домен ограничивается примерно 20+. Точное ограничение зависит от конкретного 
//браузера.

// У куки есть ряд настроек, многие из которых важны и должны быть установлены.
// Эти настройки указываются после пары ключ=значение и отделены друг от друга разделителем ;, вот так:

// document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
// path
// path=/mypath
// URL-префикс пути, куки будут доступны для страниц под этим путём. Должен быть абсолютным. 
//По умолчанию используется текущий путь.

// Если куки установлено с path=/admin, то оно будет доступно на страницах /admin и /admin/something, 
//но не на страницах /home или /adminpage.

// Как правило, указывают в качестве пути корень path=/, чтобы наше куки было доступно на всех страницах сайта.

// domain
// domain=site.com
// Домен, на котором доступны наши куки. На практике, однако, есть ограничения – мы не можем указать 
//здесь какой угодно домен.

// По умолчанию куки доступно лишь тому домену, который его установил. Так что куки, которые были 
//установлены сайтом site.com, не будут доступны на сайте other.com.

// …Но что более интересно, мы не сможем получить эти куки на поддомене forum.site.com!

// // на site.com
// document.cookie = "user=John"

// // на forum.site.com
// alert(document.cookie); // нет user
// Нет способа сделать куки доступным на другом домене 2-го уровня, так что other.com никогда 
//не получит куки, установленное сайтом site.com.

// Это ограничение безопасности, чтобы мы могли хранить в куки конфиденциальные данные, 
//предназначенные только для одного сайта.

// …Однако, если мы всё же хотим дать поддоменам типа forum.site.com доступ к куки, 
//это можно сделать. Достаточно при установке куки на сайте site.com в качестве 
//значения опции domain указать корневой домен: domain=site.com:

// // находясь на странице site.com
// // сделаем куки доступным для всех поддоменов *.site.com:
// document.cookie = "user=John; domain=site.com"
// // позже
// // на forum.site.com
// alert(document.cookie); // есть куки user=John
// По историческим причинам установка domain=.site.com (с точкой перед site.com) также работает 
//и разрешает доступ к куки для поддоменов. Это старая запись, но можно использовать
// и её, если нужно, чтобы поддерживались очень старые браузеры.
// Таким образом, опция domain позволяет нам разрешить доступ к куки для поддоменов.

// expires, max-age
// По умолчанию, если куки не имеют ни одного из этих параметров, то они удалятся при закрытии браузера. 
//Такие куки называются сессионными («session cookies»).

// Чтобы помочь куки «пережить» закрытие браузера, мы можем установить значение опций expires или max-age.
// expires=Tue, 19 Jan 2038 03:14:07 GMT
// Дата истечения срока действия куки, когда браузер удалит его автоматически.

// Дата должна быть точно в этом формате, во временной зоне GMT. Мы можем использовать date.toUTCString, 
//чтобы получить правильную дату. Например, мы можем установить срок действия куки на 1 день.

// // +1 день от текущей даты
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date;
// Если мы установим в expires прошедшую дату, то куки будет удалено.

// max-age=3600
// Альтернатива expires, определяет срок действия куки в секундах с текущего момента.
// Если задан ноль или отрицательное значение, то куки будет удалено:

// // куки будет удалено через 1 час
// document.cookie = "user=John; max-age=3600";
// // удалим куки (срок действия истекает прямо сейчас)
// document.cookie = "user=John; max-age=0";

// secure
// Куки следует передавать только по HTTPS-протоколу.
// По умолчанию куки, установленные сайтом http://site.com, также будут доступны на сайте 
//https://site.com и наоборот.

// То есть, куки, по умолчанию, опираются на доменное имя, они не обращают внимания на протоколы.

// С этой настройкой, если куки будет установлено на сайте https://site.com, то оно не будет 
//доступно на том же сайте с протоколом HTTP, как http://site.com. Таким образом, если в куки хранится 
//конфиденциальная информация, которую не следует передавать по незашифрованному протоколу HTTP, 
//то нужно установить этот флаг.

// // предполагается, что сейчас мы на https://
// // установим опцию secure для куки (куки доступно только через HTTPS)
// document.cookie = "user=John; secure";


// Итого
// document.cookie предоставляет доступ к куки

// операция записи изменяет только то куки, которое было указано.
// имя и значение куки должны быть закодированы.
// одно куки вмещает до 4kb данных, разрешается более 20 куки на сайт (зависит от браузера).

// Настройки куки:
// path=/, по умолчанию устанавливается текущий путь, делает куки видимым только по указанному пути и ниже.
// domain=site.com, по умолчанию куки видно только на текущем домене, если явно указан домен, 
//то куки видно и на поддоменах.
// expires или max-age устанавливает дату истечения срока действия, без них куки умрёт при закрытии браузера.
// secure делает куки доступным только при использовании HTTPS.
// samesite запрещает браузеру отправлять куки с запросами, поступающими извне, 
//помогает предотвратить XSRF-атаки.

// Дополнительно:
// Сторонние куки могут быть запрещены браузером, например Safari делает это по умолчанию.
// Установка отслеживающих куки пользователям из стран ЕС требует их явного согласия на это в 
//соответствии с законодательством GDPR.



