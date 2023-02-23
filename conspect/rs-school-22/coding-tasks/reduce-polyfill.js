const arr = [1,2,3];

const funcReducer = (accum, currentItem) => accum + currentItem;

const reduce = (reducer, array, initialvalue) => {
    let acc = initialvalue;
    for (let item in array) {
        let currentvalue = array[item];
        acc = reducer(acc, currentvalue);
    }
    return acc;
}

const res = reduce(funcReducer, arr, 0);
console.log(res);


