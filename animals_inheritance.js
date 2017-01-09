"use strict"

class Animal{
  constructor(nama,numleg,fur){
    this.nama= nama;
    this.numleg= numleg;
    this.fur = fur;
  }

}

class Primate extends Animal {
  constructor(nama,numleg,fur){
    super(nama,numleg,fur);
    this.nama = nama;
    this.numleg= 2;
    this.fur= true;
  }

}

class Cat extends Animal {
  constructor(nama,numleg,fur,tail){
    super(nama,numleg,fur);
      this.nama = nama;
      this.numleg =4;
      this.fur = true;
      this.tail = true;

    }
  }
  class Lion extends Cat{
    constructor(nama,numleg,fur,tail){
      super(nama,numleg,fur,tail);
      this.nama=nama;

    }
  }

class Chimpanzee extends Primate{
  constructor(nama,numleg,fur,says){
    super(nama,numleg,fur);
    // super.speak();
    this.nama = "Chimpanzee";
  }


}

class Gorilla extends Primate {
  constructor(nama,numleg,fur){
    super(nama,numleg,fur);
    this.nama = "Gorilla";

  }
  speak() {
  console.log(`${this.name} says OOOAAOOAO`);
}
}

class SuperPoweredChimp extends Chimpanzee{
  constructor(nama,numleg,fur){
    super(nama,numleg,fur);
    this.nama = nama;
  }
  use_punch(){
    console.log(`${this.nama} use punch`)
  }
  be_invisible(){
    console.log(`${this.nama} use invisibility`)
  }
}

class SuperPoweredLion extends Lion{
  constructor(nama,numleg,fur,charisma=0){
    super(nama,numleg,fur);
    this.nama = nama;
    this.charisma=charisma;
  }
  use_roar(){
    this.charisma++;
    return `${this.nama} gain ${this.charisma} charisma to be a King`;
  }
}




var simp = new Chimpanzee("Chimp");
console.log(simp);
var newSimp = new Chimpanzee("Chimp-friend");
var newGorilla = new Gorilla("tarzan-mom");

var simba = new Lion("simba");
console.log(simba);

var lionCool = new SuperPoweredLion("si mba");
console.log(lionCool.use_roar());

var smartChimp = new SuperPoweredChimp("smart chimp");
smartChimp.use_punch();

// simp.speak();
