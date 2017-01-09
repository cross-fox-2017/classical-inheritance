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
