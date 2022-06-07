export const numbersTest = ''

// var num = 5;
// console.log(num.toPrecision(2)); // 5.0.  -   оставляет заданное кол-во значимых знаков
// console.log(num.toFixed(3)); // 5.000   -  оставляет заданное кол-во дробных знаков 


// var num = 10;
// console.log(num.toPrecision(2)); // 10  -   оставляет заданное кол-во значимых знаков
// console.log(num.toFixed(2)); // 10.00   -  оставляет заданное кол-во дробных знаков 


// var num = 123;
// console.log(num.toFixed(-1)); //RangeError: toFixed() digits argument must be between 0 and 100


// console.log(-3.14.toFixed(3));  //-3.14   БЕЗ КАВЫЧЕК!!! НЕ СТРОКА!!!
// Owing to operator precedence, the - operator is evaluated last in the code above. 
//First 3.14.toFixed(3) is evaluated. This returns '3.140'. 
//Then the - operator converts this string into a number and negates its sign. 
//This gives the number -3.14.


// var num = 106;
// console.log(num.toExponential(1)); //'1.1e+2' (having 1 digit after the decimal point)
// toExponential() converts a number into exponential notation with given digits in 
//the fractional part, and then returns the result in the form of a string. 
//In this case, num.toExponential(1) converts num to '1.1e+2' (having 1 digit after the decimal point). 


//console.log(10 .toString(16)); // 'a'
// Called on the number 10, toString(16) converts it into hexadecimal representation. 
//Since in hexadecimal, 10 is denoted as 'A' (or even as 'a'), the method returns 'a'.


// console.log( parseInt(100 .toString(2), 2) ); // 100
// 100 .toString(2) converts 100 into binary representation, and then parseInt(), 
//with the second argument as 2, converts this binary string back into a decimal notation. 
//That is, we get the number 100 back in the end. Likewise, the correct choice is (B).


// console.log(0.56.toPrecision(0));
// There can be no number in JavaScript with 0 significant figures. Thus, toPrecision(), which rounds a number to given significant figures, when called with 0 as an argument throws an error. 


// Number(null) // 0
// null gets converted to the number value 0 when passed to Number()


// console.log(Math.min(3, null, 10, 2));
// Math.min() first converts all of its arguments into a number 
//(using the same semantics as used by Number()) and then performs 
//the search for the minimum value of these numbers. null gets converted into 0. 
//Therefore, in the code above, the minimum number is 0, obtained by the value null. 


//Какой код корректно найдёт максимальное значение в непустом массиве arr?
//arr = [3,5,7,2,5,8,9,3,0]
//res = arr.reduce(function(prev, item) { return Math.max(prev, item) })   // DONE
//res = Math.max.apply(null, arr)   // DONE
//res = Math.max(arr)   // NaN
//res = arr.findMax()   //TypeError: arr.findMax is not a function
//console.log(res)


//alert( +"Infinity" ); //Infinity


// let a = (1,5 - 1) * 2;
// alert(a); //8
//(1,5 - 1) // 4.  интерпретирует как 5-1, т.е. только то что после запятой



// Что получится, если сложить true + false?
// "truefalse"
// 0
// 1  // DONE
// NaN



// Что выведет этот код?
// function F() { return F; }
// alert( new F() instanceof F );
// alert( new F() instanceof Function );

// false, false.
// false, true. // DONE
// true, false.
// true, true.



