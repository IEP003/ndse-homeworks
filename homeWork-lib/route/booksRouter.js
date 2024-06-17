const express = require('express');
const router = express.Router();
const Book = require('../class/Books.js');
const Storage = require('../db/storage.js');
const fileMulter = require('../middleware/file.js');




router.get('/', (req, res) => {
    const { library } = Storage;
    res.json(library);
})

router.get('/:id' , (req, res) => {
    const { library } = Storage;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id)

    if(index !== -1){
        res.json(library[index])
    } else {
        res.status(404), 
        res.json('404 | Страница не найдена')
    }
})

router.post('/' , fileMulter.single('fileBook'), (req, res) => {

    const { library } = Storage;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName, req.file.path);
    library.push(newBook);
    res.status(201);
    res.json(newBook);
})

router.put('/:id' , (req, res) => {
    const { library } = Storage;
    const { title, description, authors, favorite, fileCover, fileName, fileBook } = req.body;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id);

    if(index !== -1){
        library[index] = {
            ...library[index],
            title, 
            description, 
            authors, 
            favorite, 
            fileCover, 
            fileName,
            fileBook
        }
        res.json(library[index])
    } else {
        res.status(404), 
        res.json('404 | Страница не найдена')
    }
})

router.delete('/:id' , (req, res) => {
    const { library } = Storage;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id);

    if(index !== -1){
        library.splice(index, 1)
        res.json(true)
    } else {
        res.status(404), 
        res.json('404 | Страница не найдена')
    }
})

router.get('/:id/download', (req, res) => {
    const { library } = Storage;
    const { id } = req.params;
    const index = library.findIndex(book => book.id === id);

    if(index !== -1){
        res.download(library[index].fileBook)
    } else {
        res.status(404),
        res.json('404 | Страница не найдена')
    }
})

module.exports = router