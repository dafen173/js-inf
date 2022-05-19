export const innerHtmlInnerText = 'https://efim360.ru/javascript-chem-otlichaetsya-innertext-ot-innerhtml/'


// Чем отличается innerText от innerHTML?
// На первых порах изучения JavaScript бывают непонятны отличительные черты некоторых свойств объектов. 
//Например, в инструментах разработчика не всегда можно понять разницу между innerText и innerHTML. 
//Такое бывает из-за одинакового строкового содержимого в этих свойствах у элемента.

// Так в чём же различие?

// innerText - показывает всё текстовое содержимое, которое не относится к синтаксису HTML. 
//То есть любой текст, заключённый между открывающими и закрывающими тегами элемента будет записан в innerText. 
//Причём если внутри innerText будут ещё какие-либо элементы HTML со своим содержимым, 
//то он проигнорирует сами элементы и вернёт их внутренний текст.

// innerHTML - покажет текстовую информацию ровно по одному элементу. 
//В вывод попадёт и текст и разметка HTML-документа, которая может быть заключена между 
//открывающими и закрывающими тегами основного элемента.

spisok[0].innerText
   // "Холодильник - 52000 руб. (рублей)"
spisok[1].innerText
   // "Телевизор - 41000 руб. (рублей)"

spisok[0].innerHTML
   // "Холодильник - <span><b>52000</b> руб. <i style="color: red">(рублей)</i></span>"
spisok[1].innerHTML
   // "Телевизор - <span><b>41000</b> руб. <i style="color: red">(рублей)</i></span>"




