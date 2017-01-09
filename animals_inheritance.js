"use strict"
class animal {
  constructor(nama){
    this.nama= nama
  }
}

class mammal extends animal {
  constructor(nama, is_warm_blooded){
    super(nama)
    this.is_warm_blooded = true
  }
}

class primate extends mammal {
  constructor(nama,is_warm_blooded,num_legs){
    super(nama, is_warm_blooded)
    this.num_legs= 2
  }
}

class chimpanzee extends primate {
  constructor(nama, is_warm_blooded,num_legs,nickname){
    super(nama,is_warm_blooded, num_legs)
    this.nickname= nickname
  }
}
class superpower extends chimpanzee{
  constructor(nama, is_warm_blooded,num_legs,nickname,power){
    super(nama, is_warm_blooded,num_legs,nickname)
    this.power= power
  }
  kamehameha(power){
    this.power=power
    return console.log(this.power)
  }
}

class superPoweredChimpanzee extends superpower {
  constructor(nama, is_warm_blooded,num_legs,nickname,power,heroname){
    super(nama, is_warm_blooded,num_legs,nickname,power)
    this.heroname=heroname;
  }
  kamehameha(power){
    super.kamehameha(power)
  }
}

var simpanse =new superPoweredChimpanzee('simpanse','','','hero','kamehameha','justice')
console.log(simpanse)
