"use strict"

class Animal{
  constructor(from,qtylegs){
    this._from    = from
    this._qtylegs = qtylegs

  }

  detil(){
    console.log(`Binatang asal ${this._from} dengan jumlah kaki ${this._qtylegs}`)
  }

}

class Primate extends Animal{
  constructor(from,qtylegs,liveon,blooded){
    super(from,qtylegs);
    this._liveon         = liveon;
    this._is_warm_blooded = blooded;

  }

  detil(){
    super.detil()
  }

}

class Kukang extends Primate{
  constructor(from,qtylegs,liveon,blooded,nama,weight,height){
    super(from,qtylegs,liveon,blooded)
    this._nama   = nama;
    this._weight = weight;
    this._height = height;
    this._powered= new SuperPowered;
  }

  detil(){
    super.detil()
  }

  summary(){
    console.log(`${this._nama} adalah binatang asli dari ${this._from} dengan jumlah kaki ${this._qtylegs} tinggal di ${this._liveon} berdarah ${this._is_warm_blooded} memiliki berat ${this._weight} dan tinggi maksimal ${this._height} memiliki keahlian ${this._powered.use_laservision()}`)
  }
}

class SuperPowered{
  constructor(){


  }

  use_laservision(){
    return `mata laser`
  }

  be_invisible(){
    console.log('menghilang');
  }
}
var binatang = new Kukang ('indonesia', '2','darat', 'dingin', 'kukang','600gr','10cm')

binatang.detil();
console.log(binatang._powered.use_laservision());
binatang.summary();
