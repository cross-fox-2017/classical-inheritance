"use strict"
class Animal {
  constructor(name, leg) {
    this._name = name
    this._leg = leg
  }
  myNameIs(){
    console.log(`The Species Name is: ${this._name}, Animal Leg : ${this._leg}`);
  }
}

class Mammal extends Animal {
  constructor(name, leg) {
    super(name, leg)
  }
  myNameIs(){
    super.myNameIs()
  }

}

class Primate extends Animal {
  constructor(name, leg) {
    super(name, leg)
  }
  myNameIs(){
    super.myNameIs()
  }
}

class SuperPoweredHorse extends Mammal{
  constructor(name, leg) {
    super(name, leg)
    this._ability = ''
  }
  be_invisible(){
    console.log(`This ${this._name} has Invisible Ability`);
  }
}

// let hewan = new Mammal()
let horse = new SuperPoweredHorse('kuda','4')
// hewan.myNameIs()
horse.myNameIs()
horse.be_invisible()
// hewan.be_invisible()
// console.log(hewan.myNameIs());
