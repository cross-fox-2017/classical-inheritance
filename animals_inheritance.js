"use strict"

//RELEASE 0
class Animal {
	constructor (name, species, num_legs) {
		this.name = name
		this.species = species
		this.num_legs = num_legs
	}

	getAnimal() {
		return console.log(`Animal name : ${this.name}\nSpecies : ${this.species}\nTotal Legs : ${this.num_legs}\n`)
	}

}

class Amphibian extends Animal {
	constructor (name, species, num_legs) {
		super(name, species, num_legs)
	}
}

var hewan = new Amphibian("Frog", "Amfibi", 4)
hewan.getAnimal()

//RELEASE 1
class SuperPoweredAmphibian extends Amphibian {
	constructor (name, species, power) {
		super(name, species, power)
	}

	live_two_world() {
		return "Super Power : Live in two world"
	}
}

var superAmfibi = new SuperPoweredAmphibian("Frog Ninja", "Amfibi Legend", 4)
superAmfibi.getAnimal()
console.log(superAmfibi.live_two_world())