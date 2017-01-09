"use strict"
class Animal {
  constructor(blood, name, numLeg) {
    this.name = name
    this.blood = blood
    this.numLeg = numLeg
    this.SuperPowered = new SuperPowered();
  }
  animalName(){
    console.log(`Nama binatang ini: ${this.name}`);
  }
  animalBlood(){
    console.log(`Tipe darah: ${this.blood}`)
  }
  animalLeg(){
    console.log(`Jumlah kaki: ${this.numLeg}`)
  }
  animalPower(){
    return this.SuperPowered.be_invisible()
  }
}

class Aves extends Animal {
  constructor(blood,name,SuperPowered) {
    super(blood,name,SuperPowered)
  }
  animalName(){
    super.animalName()
  }
  animalBlood(){
    super.animalBlood()
  }
  animalPower(){
    super.animalPower()
  }
}

class SuperPowered {
  constructor() {
  }
  be_invisible(){
    console.log(`${this.name} have super power: invisible`);
  }
  use_laser_vision(){
    console.log(`${this.name} have super power: laser vision`);
  }
}


class Reptil extends Animal {
  constructor(blood,name) {
    super(blood,name)
  }
  animalName(){
    super.animalName()
  }
  animalBlood(){
    super.animalBlood()
  }
}

let binatang = new Aves('Panas','Pico')
 binatang.animalBlood()
 binatang.animalName()
 binatang.animalPower()
