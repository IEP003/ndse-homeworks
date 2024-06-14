#!/usr/bin/env node
const https = require('https');
const config =  require('dotenv').config

const myAPIKey = config().parsed.key
const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${myAPIKey}`;


https.get(url, (res) => {
    const { statusCode } = res;
    if(statusCode !== 200){
        console.log(`statusCode: ${statusCode}`)
        return
    }
    res.setEncoding('utf-8')
    let rowData = ''
    res.on('data', (chunk) => rowData += chunk)
    res.on('end', () => {
        let parseData = JSON.parse(rowData)
        console.log(parseData)
    })
    
}).on('error', (err) => {
    console.log(err)
})


