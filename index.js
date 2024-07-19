import { Dog } from './js/Dog.js';
import { Car } from './js/Cars.js';
const rex = new Dog("Rex", 'black', 10);
console.log(rex);

const bris = new Dog("Bris", 'white', 32);
console.log(bris);

console.log(rex.age);
console.log(rex.hi());
rex.think();
console.log(rex.addNumbers(5, 5));
console.log(rex.manyBones(12))

rex.legCount = 5;
rex.lostLeg();
console.log(rex);
console.log(rex.birthday());
console.clear();


// class -> Car(Automobilis)

// Savybės:

// -   pavadinimas(Audi)
//     - modelis(80)
//     - spalva
//     - kuro bako talpa(litrais)
//         - vidutinės kuro sąnaudos 100km
//             - ar įjungtas varyklis(default: false)
//                 - greitis(default: 0)

// Metodai:

// -   ijungti varykli
//     - ijungto varykli dar karto ijungti negalima, sugadinti starteri
//         - isjungti varykli
//             - isjungto varyklio isjungti negalima...
// -   pradeti vaziuoti(greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
//     - vaziuoti(naudoja 1x litro kuro sanaudu)
//     - sustoti(greitis tiesiog tampa nulinis)
//     - kiek liko kuro ?
//         -   uzpilti kuro baka(kiek litrais)

// Vertinimas:

// -   git, Github ir commitai - 1 balas
//     - constructor reikiamos reikšmės, jų pavadinimų logiškumas ir teisingos pirminės reikšmės ar jų priskyrimas iš parametrų - 2 balai
//         - metodai, jų pavadinimų logiškumas, priimamų parametrų pavadinimai ir jų kiekis, vidinė logika ir jos pilnavertis validavimas:
// -   varyklio įjungimas - 1 balas
//     - varyklio išjungimas - 1 balas
//         - pradėjimas važiuoti - 1, 5 balo
//             - važiavimas - 1 balas
//                 - sustojimas - 1 balas
//                     - likęs kuro kiekis - 1 balas
//                         - kuro bako užpilimas - 1, 5 balo

// Total: 10 balų.

const audi80 = new Car('Audi', '80', 'Pink', 50, 7.3, 12);
console.log(audi80.turnOn());
console.log(audi80.turnOff());
console.log(audi80.turnOff());
console.log(audi80.turnOn());
console.log(audi80);
console.log(audi80.startDriving());
console.log(audi80.drive());
console.log(audi80.fuelLeft());
console.log(audi80.addFuel(7));
console.clear();
console.log(audi80.turnOn());
console.log(audi80.turnOff());
console.log(audi80.startDriving());
console.log(audi80.drive());
console.log(audi80.addFuel(10));
console.log(audi80.fuelLeft(10));
console.log(audi80.stop(10));
console.log(audi80.addFuel(10));
console.log(audi80.turnOff(10));
console.log(audi80.addFuel(10));
console.log(audi80.startDriving(10));

// console.log(audi80);

// console.log(audi80.turnOff());
// console.log(audi80.stop());
// console.log(audi80.stop());


// console.log(audi80.turnOff());
// console.log(audi80.turnOn());
// console.log(audi80);

