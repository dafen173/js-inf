
function sum(a,b, ...restExample) {
    console.log(restExample); // [3,4,5]
}
// list of items convert to array
sum(1,2,3,4,5)

//==================================
Math.min(1,2,3); // 1

let spreadExmp = [1,2,3,-8];

// convert array to list of items
console.log(Math.min(...spreadExmp));
