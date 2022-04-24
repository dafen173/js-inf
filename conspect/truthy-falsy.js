export const truthyFalsy = 'https://learn.javascript.ru/ifelse'


// Truthy / Falsy
// В JavaScript истинное или ложное значение - это значение, которое преобразуется в логическое значение при оценке в логическом контексте. Примером логического контекста может быть оценка условия if:

//  TRUTHY!!! Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
;


//FALSY!!! Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
;
