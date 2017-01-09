"use strict"
class Animal {
  constructor(blood, name, numLeg) {
    this.name = name
    this.blood = blood
    this.numLeg = numLeg
  }
  animalBlood(){
    console.log(`tipe darah: ${this.blood}`)
  }
  animalLeg(){
    console.log(`jumlah kaki: ${this.leg}`)
  }
  be_invisible(){
    console.log(`${this.name} super power is : Run fast`);
  }
}

class Aves extends Animal {
  constructor(blood) {
    super(blood)
  }
  animalBlood(){
    super.animalBlood()
  }
  be_invisible(){
    super.be_invisible()
  }
}
class Reptil extends Animal {
  constructor() {

  }
}

let binatang = new Aves('panas')
 binatang.animalBlood()
 binatang.be_invisible()
