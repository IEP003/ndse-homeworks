#!/usr/bin/env node

const yargs = require("yargs/yargs")
const { hideBin } = require('yargs/helpers')

const { argv } = yargs(hideBin(process.argv)).
    option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'год'
    }).
    option('month', {
        alias: 'm',
        type: 'boolean',
        description: 'месяц'
    }).
    option('date', {
        alias: 'd',
        type: 'boolean',
        description: 'дата'
    })

const date = new Date()
const action = argv['_'][0]
const argNumber = argv['_'][1]

const selector = (action) => {
    if(action === undefined) {
        console.log('обычная дата')
        parseTime(argv, 0)
        return
    } 

    if (action === 'add') {
        console.log('Дата в перед')
        parseTime(argv, argNumber)
        return
    } 

    if (action === 'sub') {
        console.log('Дата назад')
        const subArgNumber = - argNumber
        parseTime(argv, subArgNumber)
        return
    } 
    console.error('неправильные аргументы')
    
}

const parseTime = (obj, num) => {
    if (obj.y){
        console.log(date.getFullYear() + num)
        return
    }
    
    if (obj.m){
        console.log(date.getMonth() + 1 + num)
        return
    } 
    
    if (obj.d){
        console.log(date.getDate() + num)
        return
    } 

    console.log(date)
}

return selector(action)
