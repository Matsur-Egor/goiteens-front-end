'use strict'

//---------------1--------------
const name = (prompt ('Введіть ваше ім\'я'))

console.log(name);

// --------------2-------------
let age = 14;
let age2 = 13;

alert (age + age2);

//---------------3-------------
const a = 16;
const b = 21;

console.log(`${a + b}`);

//-------------4-----------------
const a1 = 5+3;
const a2 = 5-3;
const a3 = 5*3;
const a4 = 5/3;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

//-----------5-------------------

const a5 = 5%3;
const a6 = 3%5;
const a7 = 5+'3';
const a8 = '5'+3;
const a9 = (75 + 'кг');

alert (a5);
alert (a6);
alert (a7);
alert (a8);
alert (a9);

//----------------6---------------

const height = 23;
const width = 10;
const s = height * width 

console.log('Площадь прямокутника '+ s + ' (cм квадратных)');

//---------------7-----------------
const heightC = 10;
const widthdC = 4;
const r = widthdC/2;
const v = Math.PI*(r**2)*heightC;
const round = Math.round(v);

console.log('Обсяг циліндра = ' + round);

//--------------8-----------------

const n = 3;
const m = 4;
let k = 0;

k = (m ** 2) + Math.pow(n , 2); //100
k = Math.sqrt(k);

console.log('Гіпотенуза k = ' + k);
