"use strict"
class Animal {
  constructor(blood, spesies, numLeg) {
    this.spesies = spesies
    this.blood = blood
    this.numLeg = numLeg
  }
  animalBlood(){
    console.log(`tipe darah: ${this.blood}`)
  }
  animalLeg(){
    console.log(`jumlah kaki: ${this.leg}`)
  }
}

class Aves extends Animal {
  constructor(blood) {
    super(blood)
  }
  animalBlood(){
    super.animalBlood()
  }
}
class Reptil extends Animal {
  constructor() {

  }
}

let binatang = new Aves('panas')
 binatang.animalBlood()
