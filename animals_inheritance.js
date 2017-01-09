"use strict"

class Animal{

      constructor(numleg){
            this._numleg = numleg || 0;
            this._is_warm_blooded = "true";
      }


}

class Mammal extends Animal{

        constructor(numleg){

            super(numleg);
        }

}

class Primate extends Animal{

        constructor(numleg){

            super(numleg);
        }

}


class Chimpanzee extends Primate{

      constructor(numleg,name){
          super(numleg);
          this._name = name;
      }

      getName(){
        return this._name;
      }

}

class superPoweredChim extends Chimpanzee{

        constructor(numleg,name){
            super(numleg,name)
        }

        joke(){

            return "Irsan Handsome";

        }

}

var irsan = new Chimpanzee(2,"irsan");
var skill = new superPoweredChim();


console.log(`Nama Simpanse : ${irsan.getName()} \n jumlah kaki  : ${irsan._numleg} \n`);
console.log(`Say something funny : ${skill.joke()}`);
