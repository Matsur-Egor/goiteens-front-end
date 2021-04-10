'use strict'

console.log('------------------------1------------------------');

let number = 0
while (number <= 10) {
  console.log(number);
  number++
}



console.log('------------------------2------------------------');

let numbers = 11,
 counter = 0

for(let i = 1; i < numbers; i++) {
  let counter = i % 2
  if(counter === 0){
    console.log('Число парне');
  }else {
    console.log('Число непарне');
  }
}



console.log('------------------------3------------------------');

let num = 20

while(num <= 28){
  console.log(num +' + 1 ');
  num++
}



console.log('------------------------4------------------------');

let name = '',
    count = name

do {
  name = prompt('Введіть ім\'я свого улюбленого героя');
  if(name.length < 6){
    console.log(name);
  }

} while (name.length < 6);