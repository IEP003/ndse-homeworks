#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const randomaizer = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const hideNumber = randomaizer(0, 100);

rl.write('Загадано число в диапазоне от 0 до 100\n');

rl.on('line', data => {
    const inputNumber = Number(data);
    if(hideNumber > inputNumber) {
        console.log(`Больше`);
    } else if (hideNumber < inputNumber) {
        console.log(`Меньше`);
    } else {
        console.log(`Отгадано число ${hideNumber}`);
        console.log(`Вы отгадали за ${rl.history.length - 1} ходов`)
        rl.close();
    }
})

