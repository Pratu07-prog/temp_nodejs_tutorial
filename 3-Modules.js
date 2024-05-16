// Modules


// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-name')
const sayHi = require('./4-utlis')

const data = require('./6-Alternative_flavour')

require('./7-Mind_grenade')
console.log(data);
sayHi('Pratu')
sayHi(names.john)
sayHi(names.peter) 