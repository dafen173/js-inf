// myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?


const myFunc = (...args) => {
    let res = args.slice(1);
    console.log(res.join(args[0]));
}

myFunc('!', 4, -10, 34, 0);
