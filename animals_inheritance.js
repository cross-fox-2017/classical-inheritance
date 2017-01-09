"use strict"
class Animal {
  constructor(jenis) {
    this.jenis = jenis;
    this.num_legs = 2;
  }

  warna(str) {
    console.log(`${this.jenis} punya kaki sebanyak ${this.num_legs} dan warnanya ${str}`);
  }
}

class Mammal extends Animal {
  constructor (jenis, num_legs, kulit) {
    super (jenis, num_legs);
    this.kulit = kulit;
  }
  warna(str) {
    super.warna(str);
  }
}

class SuperPoweredKera extends Mammal {
  constructor(jenis, num_legs, kulit, superPower) {
    super(jenis, num_legs, kulit)
    this.superPower = "";
  }

  manjat_pohon() {
    this.superPower = "Manjat Pohon"
    console.log(`${this.jenis} punya keahlian khusus yaitu ${this.superPower}`)
  }
}

let hewan = new Animal ('Kera');
let kera = new SuperPoweredKera('Kera')

hewan.warna('coklat');
kera.manjat_pohon()
