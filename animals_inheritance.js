"use strict"

class Animal{
  constructor(nama, num_legs, is_warm_blooded){
    this.num_legs = num_legs;
    this.nama = nama
    this.is_warm_blooded = is_warm_blooded
  }
}

class Mammal extends Animal{
  constructor(nama, num_legs, is_warm_blooded){
    super(nama, num_legs, is_warm_blooded)
    this.num_legs = 4;
    this.is_warm_blooded = true;
    this.is_has_egg = false
  }
}

class Primate extends Mammal{
  constructor(nama, num_legs, is_warm_blooded){
    super(nama, num_legs, is_warm_blooded)
    this.num_legs = 2;
    this.hairy = true;
  }
}

class Chimpz extends Primate{
  constructor(nama, num_legs, is_warm_blooded){
    super(nama, num_legs, is_warm_blooded)
  }
}

class Reptile extends Animal{
  constructor(nama, num_legs, is_warm_blooded){
    super(nama, num_legs, is_warm_blooded)
    this.num_legs = 4;
    this.is_warm_blooded = false
  }
}

class SuperPoweredFrog extends Reptile{
  constructor(nama, num_legs, is_warm_blooded){
    super(nama, num_legs, is_warm_blooded)
    this.useLaser = false
  }
  electrocute(){
    this.useLaser = true
    return this
  }
}

var bobo = new Chimpz("hutan")
var kadal = new Reptile("Liza")
var frogMan = new SuperPoweredFrog("CrazyFoo")
console.log(bobo);
console.log(kadal);
console.log(frogMan);
console.log(frogMan.electrocute());
