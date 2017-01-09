"use strict"

class Animals {
  constructor(name, is_warm_blooded, num_legs) {
    this.name = name
    this.is_warm_blooded = is_warm_blooded
    this.num_legs = num_legs
  }
}

class Mammal extends Animals {
  constructor(name, is_warm_blooded, num_legs) {
    super(name);
    this.is_warm_blooded = true;
  }
}


class Primate extends Mammal {
  constructor(name, is_warm_blooded, num_legs) {
    super(name, is_warm_blooded);
    this.num_legs = 2;
  }
}


class Chimpanzee extends Primate {
  constructor(name, is_warm_blooded, num_legs) {
    super(name, is_warm_blooded, num_legs)
  }
}

class Fox extends Mammal {
  constructor(name, is_warm_blooded, num_legs) {
    super(name, is_warm_blooded)
    this.num_legs = 4
  }
  color(input){
    this.color = input
    console.log(`${this.name}'s color is ${this.color}`);
  }
}

class SuperPoweredFox extends Fox{
  constructor(name, is_warm_blooded, num_legs, super_power) {
    super(name, is_warm_blooded,num_legs)
    this.super_power = '';
  }
  be_invisible(){
    this.super_power = 'invisible'
    console.log(`the ${this.name} can be ${this.super_power} at night. Cool!`);
  }
}

var fox = new Fox('arctic fox', true, 4)
console.log(fox);
fox.color('white')

var fox = new SuperPoweredFox('Cross fox')
fox.be_invisible()
