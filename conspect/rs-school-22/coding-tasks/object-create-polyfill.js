
// https://learn.javascript.ru/new-prototype


function inherit (myproto) {
    function F(name){this.name = name};
    F.prototype = myproto;
    const obj = new F('yoooooooo');

    console.log(F.prototype);   // {eats: true}
    return obj;
}

var animal = {
    eats: true
  };

var rabbit = inherit(animal);

alert( rabbit.eats ); // true
rabbit;  // {name: 'yoooooooo'}
rabbit.__proto__;  // {eats: true}


