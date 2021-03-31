'use strict'

console.log('----------------------1---------------------'); 
const range = prompt ('Введіть число від 55 до 99')
const num = 55
const num2 = 99

if (range>=num && range<=num2){
    console.log('Число попадає в діапазон');
} else{
    console.log('Число не попадає в діапазон');
} 



console.log('----------------------2---------------------'); 

const range2 = prompt('Введіть ваш вік будь-ласка ')

if (range2 <= 16){
    alert('Ви дитина')
    console.log('Ви дитина');
}else{
    if (range2 >= 17 && range2 <= 60){
        alert('Ви дорослий')
        console.log('Ви дорослий');
    }else{
        if(range2 >= 61 && range2 <= 100){
            alert('Ви пенсіонер')
            console.log('Ви пенсіонер' );
        }
    }
}



console.log('----------------------3---------------------');

const rangeName = prompt('Введіть будь-ласка ваше ім\'я')
const rangeSurame = prompt('Введіть будь-ласка вашу фамілію')

 if(rangeSurame.length>5 && rangeName.length > 4){
    console.log(rangeSurame.length + rangeName.length);
}else{
    console.log('УПС');
}



console.log('----------------------4---------------------');
const random = (Math.random() * (5 - 1) + 1)
const round = Math.round(random) 
console.log(round);

if(round === 1){
    console.log('Вам випало число один . Вітаємо вас');
}else{
    if(round === 2){
        console.log('Вам випало число два . Вітаємо вас');
    }else{
        if(round ===3){
            console.log('Вам випало число три . Вітаємо вас');
        }else{
            if(round === 4){
                console.log('Вам випало число чотири . Вітаємо вас');
            }else{
                if(round === 5){
                    console.log('Вам випало число п\'ять . Вітаємо вас');
                }
            }
        }
    }
}




console.log('----------------------5---------------------');

let lang = prompt('Введіть вашу мову ua,ru,en або fr')

switch(lang){
    case 'ua' :
    console.log('Київ');
    break;

    case 'ru' :
    console.log('Москва');
    break;

    case 'en' :
    console.log('London');
    break;

    case 'fr' :
    console.log('Paris');
    break;

    default :
    console.log('Пробачте мова не едентифікована перезапустіть сторінку і спробуйте ще раз');
}
