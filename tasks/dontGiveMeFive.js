
//https://www.codewars.com/kata/5813d19765d81c592200001a/javascript

//показать числа кроме чисел с определенной цифрой


function dontGiveMeFive(start, end) {
    let res = 0;
    for (let i=start; i<=end; i++ ) {
        if (!i.toString().includes('5')) {
            res = res + 1
        }       
    }
    return res
  }
  dontGiveMeFive(4,17)




