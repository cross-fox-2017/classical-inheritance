"use strict"
// release 0
// parent class
class binatang {
  constructor(nama, tipe, hobi) {
    this.nama = nama
    this.tipe = tipe
    this.hobi = hobi
    this.num_legs = 4;
  }

  tampil_dari_binatang() {
     console.log( `anjing milik rini bernama ${this.nama}, bertipe: ${this.tipe}, & memiliki hobi ${this.hobi}` );
  }

}

// child class (binatang)
  class anjing extends binatang {
    constructor(nama, tipe, hobi, num_legs) {
      super( nama, tipe, hobi, num_legs ) // sama dengan this.nama = nama, this.tipe = tipe, this.hobi = hobi
    }
    tampil_dari_anjing() {
      super.tampil_dari_binatang()
    }
  }

// child class (binatang -> anjing)
    class anjing_milik_rini extends binatang {
      constructor(nama, tipe, hobi, num_legs) {
        super( nama, tipe, hobi, num_legs ) // sama dengan this.nama = nama, this.tipe = tipe, this.hobi = hobi
      }
      tampil_dari_anjing_milik_rini() {
        super.tampil_dari_binatang()
      }

      jumlah_kaki() {
        console.log(`Banyak jumlah kaki anjing adalah ${this.num_legs}`);
      }
    }


var cinta = new anjing_milik_rini("cinta","pom","tidur");
// cinta.tampil_dari_anjing_milik_rini();
// cinta.jumlah_kaki(); // nilai jum_legs dari Instance class anjing_milik_rini memilih nilai yang sma dengan class binatang

// release 1
class SuperPoweredDog extends anjing_milik_rini {
  constructor( nama, tipe, hobi, num_legs, kemampuan ) {
    super( nama, tipe, hobi, num_legs ) // sama dengan this.nama = nama, this.tipe = tipe, this.hobi = hobi
    this.kemampuan = "";
  }

  be_invisible(val) {
    this.kemampuan = val;
    console.log( `${this.nama} memiliki kemampuan khusus, yaitu bisa ${this.kemampuan}` );
  }
}

var jacky = new SuperPoweredDog("jacky","campuran","lari");
jacky.be_invisible("berlari lalu menghilang")
