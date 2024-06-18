const express = require('express');
const router = express.Router();
const Storage = require('../db/storage');
const Book = require('../class/Books');
const fileMulter = require('../middleware/file.js');

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Библиотека',
    })
});

router.get('/books', (req, res) => {
    const { library } = Storage
    res.render('library/index', {
        title: 'Список книг', 
        library: library
    })
})

router.get('/book/view/:id', (req, res) => {
    const { library } = Storage
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id)

    res.render('library/view', {
        title: library[index].title, 
        book: library[index]
    })
})

router.get('/books/create', (req, res) => {
    res.render('library/create', {
        title: 'Добавить книгу',
        book: {
            title: "Название", 
            description: "Описание" , 
            authors: "Автор", 
            favorite: "?", 
            fileCover: "?", 
            fileName: "Электронная книга"
        }
    })
})

router.post('/books/create', fileMulter.single('fileBook'), (req, res) => {
    console.log(req.file)
    const { library } = Storage; 
    const { title, description, authors, favorite, fileCover, fileName } = req.body; 

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName );
    library.push(newBook);

    res.redirect('/books');
})

router.get('/book/update/:id', (req, res) => {
    const { library } = Storage;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id);

    res.render('library/update', {
        title: `Редактировать книгу: ${library[index].title}`, 
        book: library[index]
    })
})

router.post('/book/update/:id', (req, res) => {
    const { library } = Storage;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id);

    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    if(index !== -1){
        library[index] = {
            ...library[index],
            title, 
            description, 
            authors, 
            favorite, 
            fileCover, 
            fileName,
        }
        res.redirect('/books');
    }
})

router.post('/book/delete/:id', (req, res) => {
    const { library } = Storage;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id);

    if(index !== -1){
        library.splice(index, 1)
        res.redirect('/books')
    }
})





module.exports = router;