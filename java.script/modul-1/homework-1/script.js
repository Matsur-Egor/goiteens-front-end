'use strict'

const str = 'Привіт';
console.log(typeof str);

const num = 123;
console.log(typeof num);

const flag = true;
console.log(typeof flag);


const txt = 'true';
console.log(typeof txt);





//  ДРУГА ЧАСТИНА ЗАВДАННЯ




const str1 = 'Друга частина завдання';
console.log(str1)


const strName = 'Ім\'я :  Егор';
console.log(strName);


const strThert = 'Прізвище : Мацур';
console.log(strThert);


let num1 = 13;
console.log('Вік : ', + num1 + ' років');


const month = 'Вересня';


const dateNum = 24;
console.log('Дата народженя', + dateNum + month);


let phonNumb = '380663989493';

let phonNumb2 = 'Номер телефону +';
console.log(phonNumb2, + phonNumb);




const answ = confirm('Вам є 12 ?')
let information = 'Інформація про сайт : '
let information2 = 'Lorem impsum dolar sad can fish :)'

if (answ === true) {
    console.log('Ласкаво Просимо');
} else {
    console.log(information + information2);
}

