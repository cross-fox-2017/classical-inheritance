"use strict"

class Animal {
  contructor(name, is_warm_blood, num_legs) {
    this.name = name
  }

  berkembang(str){
    console.log(`${str} berkembang biak dengan cara Beranak`);
  }
}

class Mammal extends Animal {
  constructor(name, is_warm_blood){
    super(name, is_warm_blood)
  }
}

class Primate extends Mammal {
  constructor(name, is_warm_blood, num_legs){
    super(name, is_warm_blood)
    this.num_legs = 2
  }
}

class Chimpanzee extends Primate {
  constructor(name, is_warm_blood, num_legs){
    super(name, is_warm_blood, num_legs)
  }

  primata(str){
    console.log(`${str} adalah binatang Primata`);
  }
}

class SuperPower extends Chimpanzee {
  constructor(name, is_warm_blood, num_legs, loncat){
    super(name, is_warm_blood, num_legs)
    this.loncat = ''
  }

  jump(str){
    this.loncat = 'melompat'
    console.log(`${str} adalah binatang yang dapat ${this.loncat}`);
  }
}

let monkey = new SuperPower()
monkey.jump('Kera')
let mamalAnimals = new Primate()
mamalAnimals.berkembang('Kera')
let simpanse = new Chimpanzee()
simpanse.primata('Kera')
