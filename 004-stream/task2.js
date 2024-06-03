#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const path = require('path');

const { argv } = yargs(hideBin(process.argv));
const logFile = argv['_'][0] + '.txt';

const analysis = (data) => {
    const arrData = Array.from(data)
    const tryQuntity = arrData.length;
    const winQuntity = arrData.filter((item) => item != '1');
    const loseQuntity = arrData.filter((item) => item != '0');
    const winRate = Math.floor(100/tryQuntity*winQuntity.length)

    console.log(`Общее количество партий: ${tryQuntity}`);
    console.log(`Количество выигранных/проигранных партий: ${winQuntity.length}/${loseQuntity.length}`);
    console.log(`Процентное соотношение выигранных партий: ${winRate}%`);
}

fs.readFile(logFile, "utf-8", (err, data) => {
    if (err) throw new Error(err);
    analysis(data)
})
