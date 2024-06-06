#!/usr/bin/env node
const http = require('http');


const myAPIKey = process.env.accessKey;
const urlAPI = 'https://api.weather.yandex.ru/v2';
const headers = {
    'X-Yandex-Weather-Key': myAPIKey
};


const reqq = http.get(urlAPI, (res) => {
    console.log('+')
})

