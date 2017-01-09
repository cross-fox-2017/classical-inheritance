"use strict"
class Animal {
  constructor (jenis){
    this.jenis = jenis
  }
}

class Amphibian extends Animal{
  constructor (nama, is_warm_blooded){
    super (nama)
    this.is_warm_blooded = is_warm_blooded
  }
}

class Frog extends  Amphibian{
  constructor(nama, is_warm_blooded, warna){
    super (nama, is_warm_blooded)
    this.warna = warna
  }
  print(){
    return `jenis : ${this.jenis}, Berdarah Hangat : ${this.is_warm_blooded}, Warna: ${this.warna}`
  }
}

var xxx = new Frog('Amphibian', 'Tidak','Hijau')
console.log(xxx.print())
