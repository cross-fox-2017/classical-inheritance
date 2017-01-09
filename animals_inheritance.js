"use strict"

class Animal {
    constructor(params) {
        this.nama = params['nama']
        this.status = params['status']
    }
}

class Mammal extends Animal {
    constructor(params) {
        super(params)
    }
}

class Primate extends Mammal {
    constructor(params) {
        super(params);
        this.num_legs = 2;
    }
}
