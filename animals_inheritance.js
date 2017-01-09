"use strict"

class Animal{
  constructor(num_legs, is_warm_blooded){
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded
  }
}

class Mammal extends Animal{
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.num_legs = 4;
    this.is_warm_blooded = true;
    this.is_has_egg = false
  }
}

class Primate extends Mammal{
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.num_legs = 2;
    this.hairy = true;
  }
}

class Chimpz extends Primate{
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
  }
}

class Reptile extends Animal{
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.num_legs = 4;
    this.is_warm_blooded = false
  }
}

var bobo = new Chimpz()
var kadal = new Reptile()
console.log(bobo);
console.log(kadal);
