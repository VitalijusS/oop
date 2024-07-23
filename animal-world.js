import { Cat } from "./inheritance/Cat.js";
import { Dog } from "./inheritance/Dog.js";

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.intro());
console.log(rexas.voice());
const rainis = new Cat('Rainis', 'bengalu');
console.log(rainis.intro());
console.log(rainis.voice());
console.log(rexas);