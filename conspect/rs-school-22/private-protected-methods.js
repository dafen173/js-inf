// https://javascript.info/private-protected-properties-methods


/*


One of the most important principles of object oriented programming – delimiting internal interface from the external one.

In object-oriented programming, properties and methods are split into two groups:

Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
External interface – methods and properties, accessible also from outside the class.

In JavaScript, there are two types of object fields (properties and methods):
Public: accessible from anywhere. They comprise the external interface.
Until now we were only using public properties and methods.
Private: accessible only from inside the class. These are for the internal interface.

In many other languages there also exist “protected” fields:
accessible only from inside the class and those extending it (like private, but plus access from inheriting classes).
They are also useful for the internal interface. They are in a sense more widespread than private ones, because we usually want inheriting classes to gain access to them.
Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, so they are emulated.

Protected properties are usually prefixed with an underscore _.
That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.



So our property will be called _waterAmount:

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10



Read-only “power”
For power property, let’s make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.

That’s exactly the case for a coffee machine: power never changes.

To do so, we only need to make getter, but not the setter:

class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
coffeeMachine.power = 25; // Error (no setter)



Here we used getter/setter syntax.
But most of the time get.../set... functions are preferred, like this:

class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);
That looks a bit longer, but functions are more flexible. They can accept multiple arguments (even if we don’t need them right now).
On the other hand, get/set syntax is shorter, so ultimately there’s no strict rule, it’s up to you to decide.


Protected fields are inherited
If we inherit class MegaMachine extends CoffeeMachine, then nothing prevents us from accessing this._waterAmount or this._power from the methods of the new class.
So protected fields are naturally inheritable. Unlike private ones that we’ll see below.

========================================

Private properties

Private properties should start with #. They are only accessible from inside the class.

On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.
Private fields do not conflict with public ones.
We can have both private #waterAmount and public waterAmount fields at the same time.


For instance, let’s make waterAmount an accessor for #waterAmount:

class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

CoffeeMachine.waterAmount = 300;
machine.waterAmount = 700;
// alert(machine.#waterAmount); // Error
alert(CoffeeMachine.waterAmount); // 300
alert(machine.waterAmount); // 700


if we inherit from CoffeeMachine, then we’ll have no direct access to #waterAmount.
We’ll need to rely on waterAmount getter/setter.


Protected fields start with _. That’s a well-known convention, not enforced at the language level.
Programmers should only access a field starting with _ from its class and classes inheriting from it.

Private fields start with #. JavaScript makes sure we can only access those from inside the class.


*/
