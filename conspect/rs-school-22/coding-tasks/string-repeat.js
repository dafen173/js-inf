// 'hello world'.repeating(3) -> 'hello world hello world hello world'. How to implement?

function myrepeat(str, num) {
    let res = '';
    if (num < 0) return '';

    for (let i=0; i < num; i++) {
        res += ' ' + str;
    }

    return res.trim();
}

console.log(myrepeat('hello World', 7));
