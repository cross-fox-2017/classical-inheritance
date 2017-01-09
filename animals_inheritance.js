"use strict"

// RELEASE 0
class Animal{
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  getData() {
    return console.log(`Animal Type: ${this.type}\nAnimal Name: ${this.name}`)
  }
}

class Mammal extends Animal {
  constructor(type, name) {
    super(type, name)
  }
  getData() {
    super.getData();
  }
}

class Chimpanzee extends Mammal {
  constructor(type, name, num_legs) {
    super(type, name)
    this.legs = num_legs;
  }
  getData() {
    super.getData();
    return console.log(`Animal Legs: ${this.legs}`)
  }
}

let animal = new Chimpanzee('Mammal','Chimpanzee',2);
animal.getData();

// RELEASE 1
class SuperPowered {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis
  }
  getData(){
    return console.log(`Nama: ${this.nama}\nJenis: ${this.jenis}`)
  }
}

class SuperPoweredFox extends SuperPowered {
  constructor(nama, jenis, skill) {
    super(nama, jenis);
    this.skill = skill
  }

  useLaserVision(){
    super.getData();
    return console.log(`Skill: ${this.skill}`)
  }
}

class SuperPoweredFrog extends SuperPowered  {
  constructor(nama, jenis, skill) {
    super(nama, jenis);
    this.skill = skill
  }

  beInvinsible(){
    super.getData();
    return console.log(`Skill: ${this.skill}`)
  }
}

let spFox = new SuperPoweredFox('Fox','Mammal','Laser Vision!');
spFox.useLaserVision()

let spFrog = new SuperPoweredFrog('Frog','Amphibi','Invinsible!');
spFrog.beInvinsible()
