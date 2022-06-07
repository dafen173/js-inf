
// const obj = {
//     a: 42,
//     say: function(){
//         setTimeout( function(){
//             console.log(this.a)    
//         }, 1000)
//     }
// }

// obj.say() // undefined!!! How to fix it???


// const obj = {
//     a: 42,
//     say: function(){     
//         console.log(this.a)     
//     }
// }
// obj.say()  // 42



// //solution1

// const obj = {
//     a: 42,
//     say: function(){
//         setTimeout( () => {
//             console.log(this.a)    
//         }, 1000)
//     }
// }

// obj.say() // 42









//   function highestRank(arr){
//       let count = 0
//       let maxCount = 1
//       let res
//       for (let i=0; i < arr.length; i++) {
//         for (let j=i; j < arr.length; j++) {
//           if (arr[i] == arr[j]) {
//             count++
//             if (maxCount < count) {
//               maxCount = count
//               res = arr[i]
//             }
//           }
//         }
//       }
//       //return res
//       return console.log(res)
//     }

// highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])



// function highestRank(arr){
//   var hash={}
//   for(let i=0;i<arr.length;i++){
//     if(hash[arr[i]]) hash[arr[i]]++
//     else
//       hash[arr[i]]=1
//   }

//   console.log(hash)

  // var countMax=0;
  // var valueMax=0;

  // for(element in hash){
  //     if(countMax<=hash[element]){
  //         valueMax=Math.max(element,valueMax)
  //         countMax=Math.max(hash[element],countMax)
  //     }
  // }
  // return valueMax
  // console.log(valueMax)
// }


//highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])



// function myFunc() {
//   //let a = (b = 33)
//   a = 'pppppppp'
//   b = 'yoooooooooo'
// }
// myFunc()
// console.log(a, b)



// const myPromise = () => Promise.resolve('вопросик решен')
// async function second(){
//   console.log('второй')
//   console.log(await myPromise())
// }
// second()



// 2**3**2
// 512

// 2**9
// 512


// a = 0.1
// b = 0.2
// c = 0.3
// a = 1
// b = 2
// c = 3
// //console.log(a+ (b+c) === a+(b+c))
// console.log(a+ (b+c) === (a+b)+c)



// function myAdder(arr) {
//   arr[1]++ 
//   arr=arr+arr
//   console.log(arr) //1,4,2,51,4,2,5
//   return arr
// }
// let a = new Array(1,3,2,5)
// myAdder(a)
// console.log(a) //[ 1, 4, 2, 5 ].   почему здесь НЕ [1,4,2,51,4,2,5] ?
// a = a + a
// console.log(a) //1,4,2,51,4,2,5


// // let f = function(x) {
// //   alert(x)
// // }
// let test = 'yooooooooo'

// (function() {
//   //f(1)
//   //let test = 'foo'
//   console.log(test)
// }())


//console.log(10 .toString(16)); // 'a'


// f.call(null);
// function f() {
//   alert(this);
// } // null   или   [object Window] 












