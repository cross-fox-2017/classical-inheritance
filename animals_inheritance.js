"use strict"

class Animal{
  constructor(name,isWarmBlood,numOflegs){
    this.name        = name
    this.isWarmBlood = isWarmBlood
    this.numOfLegs   = numOflegs
  }
}

class Mammal extends Animal{
  constructor(name,isWarmBlood,numOflegs){
    super(name,isWarmBlood,numOflegs)
    this.suckling = true
  }
}

class Primate extends Mammal{
  constructor(name,isWarmBlood,numOflegs){
    super(name,isWarmBlood,numOflegs)
  }
}

class Chimpanzee extends Primate{
  constructor(name,isWarmBlood,numOflegs){
    super(name,isWarmBlood,numOflegs)
    this.smart = true
  }
}

class SuperPowerdCat extends Chimpanzee{
  constructor(name,isWarmBlood,numOflegs){
    super(name,isWarmBlood,numOflegs)
    this.superPower = "Roaring like a tiger"
  }
}


var superCat = new SuperPowerdCat("MoonCat", "Tidak", 4)

console.log(superCat)
