const arr = [1,[2,3],[4,5,6,[7,8,9]]];

const myflat = arr => {
    const someNewArray = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
           acc = acc.concat(myflat(item));
        } else {
            //acc.push(item);
            acc = [...acc, item];
        }
        return acc;
    }, []);
    return someNewArray;
}
console.log(myflat(arr));


