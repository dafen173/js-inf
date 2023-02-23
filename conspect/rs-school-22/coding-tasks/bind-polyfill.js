const person = {
    name: 'Владилен'
  }

  function info(phone, email) {
    console.log(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
  }

// Demo
//   info.bind(person)('12345', 'v@mail.ru')
//   info.bind(person, '12345')('v@mail.ru')
//   info.bind(person, '12345', 'v@mail.ru')()


// 1 - Simple
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest)
// }
// bind(info, person, '12345', 'v@ukr.net')()


// 2 - Without native methods
function bind(fn, context, ...rest) {
    return function(...args) {
        const uniqId = Date.now().toString()

        context[uniqId] = fn

        const result = context[uniqId](...rest.concat(args))

        delete context[uniqId]

        return result
    }
}
// bind(info, person)('12345', 'v@ukr.net')
// bind(info, person, '12345')('v@ukr.net')
// bind(info, person, '12345', 'v@ukr.net')()
// console.log(person)



// 2.1 - Without native methods and super bind
// Function.prototype.bind = function (ctx) {
//     const fn = this;
//     return function(...args) {
//         const rightThis = this === global ? ctx : this;
//         return fn.apply(rightThis, args);
//     }
// }
// bind(info, person)('12345', 'v@ukr.net')
// bind(info, person, '12345')('v@ukr.net')
// bind(info, person, '12345', 'v@ukr.net')()
// console.log(person)





// 3 - ES5
// function bind (fn, context) {
//     const rest = Array.prototype.slice.call(arguments, 2)
//     return function() {
//         const args = Array.prototype.slice.call(arguments)
//         return fn.apply(context, rest.concat(args))
//     }
// }
// bind(info, person)('12345', 'v@ukr.net')
// bind(info, person, '12345')('v@ukr.net')
// bind(info, person, '12345', 'v@ukr.net')()




// 4 - ES6
// function bind(fn, context, ...rest) {
//     return function(...args) {
//         // return fn.apply(context, rest.concat(args))
//         return fn.call(context, ...rest.concat(args))
//     }
// }
// bind(info, person)('12345', 'v@ukr.net')
// bind(info, person, '12345')('v@ukr.net')
// bind(info, person, '12345', 'v@ukr.net')()




// 5 - Call
// function call(fn, context, ...args) {
//     const uniqId = Date.now().toString()

//     context[uniqId] = fn

//     const result = context[uniqId](...args)

//     delete context[uniqId]

//     return result
// }
// call(info, person, '12345', 'v@ukr.net')




//  - Apply
// function apply(fn, context, args) {
//     const uniqId = Date.now().toString()

//     context[uniqId] = fn

//     const result = context[uniqId](...args)

//     delete context[uniqId]

//     return result
// }
// apply(info, person, ['12345', 'v@ukr.net'])








// ===================================================
// const obj1 = {o: 1};
// const obj2 = {o: 2};

// function prn() {
//     console.log(JSON.stringify(this));
// }

// const prn1 = prn.bind(obj1);
// prn1();

// const prn2 = prn1.bind(obj2);
// prn2();




