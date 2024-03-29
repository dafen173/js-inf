export const domTable = 'https://learn.javascript.ru/dom-nodes#avtoispravlenie'


// Таблицы всегда содержат <tbody>
// Важный «особый случай» – работа с таблицами. По стандарту DOM у них должен быть <tbody>,
//но в HTML их можно написать (официально) без него. В этом случае браузер добавляет <tbody> в DOM самостоятельно.

// Для такого HTML:
// <table id="table"><tr><td>1</td></tr></table>
// DOM-структура будет такой:
// ▾
// TABLE
// ▾
// TBODY
// ▾
// TR
// ▾
// TD
// #text 1
// Видите? Из пустоты появился <tbody>, как будто документ и был таким.
//Важно знать об этом, иначе при работе с таблицами возможны сюрпризы.





import { contents } from "./contents"
