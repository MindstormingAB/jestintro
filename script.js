//Importera Animal
const Animal = require('./animal.js')

// Skapa ett objekt av Animal
let myAnimal = new Animal('Bella', 8, 'hund')

console.log(myAnimal.name) // Bella
myAnimal.toString() // Denna hund heter Bella och är 8 år gammal.

//Birthday
myAnimal.aging()  // Öka åldern med 1
myAnimal.toString() // Denna hund heter Bella och är 9 år gammal.