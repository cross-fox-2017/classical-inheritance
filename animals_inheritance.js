"use strict"
class Animal {
  constructor(name) {
    this._name = name
  }
  myNameIs(){
    console.log(`The Species Name is: ${this._name}`);
  }
  superPowered(){
    
  }
}

class Mammal extends Animal {
  constructor(name) {
    super(name)
  }
  myNameIs(){
    super.myNameIs()
  }
}

let hewan = new Mammal('kuda')
hewan.myNameIs()
// console.log(hewan.myNameIs());
