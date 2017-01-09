"use strict"

class Animal {
  constructor(nama) {
    this._alive = true;
    this._nama = nama;
  }
  warna(string) {
    console.log(`Si ${this._nama} warnanya ${string}`);
  }

}

class Mammal extends Animal {
  constructor(nama, is_warm_blooded) {
    super(nama);
    this._is_warm_blooded = true;
  }
  warna(string) {
    super.warna(string)
  }

}

class Cat extends Mammal {
  constructor(nama, is_warm_blooded, num_legs) {
    super(nama, is_warm_blooded)
    this._num_legs = 4;
  }
  warna(string) {
    super.warna(string)
  }

}

class SuperPoweredCat extends Cat {
  constructor(nama, is_warm_blooded, num_legs, super_power) {
    super(nama, is_warm_blooded, num_legs)
    this._super_power = "";
  }

  be_invisible() {
    this._super_power = "Invisible"
    console.log(`Si ${this._nama} punya kekuatan super yaitu ${this._super_power}`)
  }
}

var kucing = new Cat('Meong', true, 4)
kucing.warna('garong')

var ucing = new SuperPoweredCat('Ucing')
ucing.be_invisible();
