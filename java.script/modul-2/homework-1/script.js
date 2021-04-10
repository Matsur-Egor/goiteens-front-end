'use strict'
console.log('-----------------1----------------');
const Arr1 = [1, 5, '4', 'hello']
console.log(Arr1);
const Arr2 = [true, 2, {}, ['a'], 222]
console.log(Arr1[2]);
console.log(Arr2[2]);
console.log(Arr1[2] + Arr2[2]);



console.log('-----------------2----------------');

Arr1[4] = 22
console.log(Arr1.join('; '));



console.log('-----------------3----------------');
for (const array2 of Arr2) {
    console.log(array2);
}


console.log('-----------------4----------------');
let message = 'Welcome to Ukraine!'
message = message.split('')
console.log(message);
console.log(message.indexOf('l'));
console.log(message.join(''));



console.log('-----------------5----------------');
const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles.splice(1,1, 'Класика')
console.log(styles.shift()); 
styles.unshift('Реп', 'Реггі')
console.log(styles);