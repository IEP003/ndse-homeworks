#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const readline = require('readline');
const fs = require('fs');

const { argv } = yargs(hideBin(process.argv));
const logFile = argv['_'][0] + '.txt';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomaizer = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};

const writeLog = (logFile, result) => {
    fs.appendFile(logFile, result, (err) => {
        if (err) throw Error(err);
    })
}

const hideNumber = randomaizer(1, 2);

rl.write('Отгадайте число 1 или 2\n');

rl.on('line', data => {    
    if(+data === hideNumber){
        console.log('вы выйграли');
        writeLog(logFile, '0')
        rl.close();
    } else {
        console.log('вы проиграли');
        writeLog(logFile, '1')
        rl.close();
    }
});