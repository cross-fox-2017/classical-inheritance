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

class Chimpanzee extends Primate {
    constructor(params) {
        super(params);
    }

    detail() {
        return `Chimpanzee Bernama "${this.nama}"" Adalah Hewan "${this.status}" Berkaki "${this.num_legs}"`
    }
}
