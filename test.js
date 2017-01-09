class Animal{
  constructor(numleg){
    this.numleg = numleg || 0;
  }

  is_warm_blooded(){

  }
}

class Primate extends Animal{

  constructor(numleg){
    super(numleg)
  }
}

class Chimpanzee extends Primate{
  constructor(numleg, name){
    super(numleg)
    this._name = 'nameee'
  }

  // set Name(name){
  //   this._name = name;
  // }
  //
  // get Name(){
  //   return this._name;
  // }

}

var irsan = new Chimpanzee(2, 'irsan');
console.log(irsan)
// irsan.Leg(2);
// irsan.Name("SIMPANSE");
//
// console.log(`Jumlah kaki ${irsan.Name} : `);
