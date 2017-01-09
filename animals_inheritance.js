"use strict"
class Animal{
	constructor(habitat){
		this.habitat = habitat;
	}
	animalHabitat(){
		return `animalHabitat is ${this.habitat}`;
	}
}

class Mamalia extends Animal{
	constructor(habitat, berkembang_biak){
		super(habitat);
		this.berkembang_biak = berkembang_biak;
	}
	animalHabitat1(){
		super.animalHabitat();
	}
}
class SuperPower extends Mamalia{
	constructor(habitat, berkembang_biak, kemampuan){
		super(habitat, berkembang_biak);
		this.kemampuan = kemampuan;
	}
	output(){
		return ` Binatang yang hidup di ${this.habitat} berkembang biak dengan cara ${this.berkembang_biak} dan mempunya kemampuan ${this.kemampuan}`;
	}
}
var animals = new SuperPower("darat", "melahirkan", "melompat");
console.log(animals.output());