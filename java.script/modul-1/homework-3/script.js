'use strict'

console.log('-------------------1--------------------'); 


const number = '5px';
const num = (Number.parseInt (number));
const k1 = num;
console.log(k1);

const number2 = '12djd334';
const num2 = (Number.parseInt (number2));

const k2 = num2;
console.log(k2);

const number3 = '12.45asdwe12';
const num3 = (Number.parseInt (number3));

const k3 = num3;
console.log(k3);

const number4 = ' qwqweeewq';
const num4 = (Number.parseInt (number4));

const k4 = num4;
console.log(k4);






console.log('-------------------2--------------------'); 
//Трохи змінив назву зміних щоб не виникала помилка

const numbers = '5px';
const nums = (Number.parseFloat (numbers));
const k5 = nums;
console.log(k5);

const numbers2 = '12djd334';
const nums2 = (Number.parseFloat (numbers2));

const k6 = nums2;
console.log(k6);

const numbers3 = '12.45asdwe12';
const nums3 = (Number.parseFloat (numbers3));

const k7 = nums3;
console.log(k7);

const numbers4 = ' qwqweeewq';
const nums4 = (Number.parseFloat (numbers4));

const k8 = nums4;
console.log(k8);



console.log('-------------------3--------------------'); 

//максимальне
const max = (Math.max (2, 34, 99, 3, 22, 36, 733, 18));
console.log(max);

//мінімальне
const min = (Math.min(2, 34, 99, 3, 22, 36, 733, 18))
console.log(min);



console.log('-------------------4--------------------'); 
//3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19

const random = (Math.random() * (20 - 2) + 1)
const round = Math.round(random) 
console.log(round);



console.log('-------------------5--------------------');
const result = 5+5+'5'
console.log(result);
console.log (typeof(result));



console.log('-------------------6--------------------');
const email = 'matsuregor@gmail.com'
// const notEmail = 'matsuregorgmail.com' 

if(email.includes('@')){
    console.log('Все правильно');
    console.log('Довжина ' + email.length + ' символів'); 
}else {
    console.log('Не правильно');
    console.log('Довжина ' + email.length + ' символів');
}



console.log('-------------------7--------------------');
const my = 'My'
const name = 'name'
const is = 'is'
const fullName = (my + ' ' + name + ' ' + is + ' ' + 'Victor')
console.log(fullName);



console.log('-------------------8--------------------');
const userName = 'Артем'
const payment = 250
alert ('Дякуємо, ' + userName + '!' + '  До сплати ' + payment + ' гривень')