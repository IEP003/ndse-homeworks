const express = require('express'); 
const { v4: uuid } = require('uuid');

class Book { 
    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", id=uuid()){
        this.title = title,
        this.description = description,
        this.authors = authors,
        this.favorite = favorite,
        this.fileCover = fileCover,
        this.fileName = fileName,
        this.id = id
    }
}

const store = {
    library: [
        new Book()
    ]
}

const app = express();

app.use(express.json());

app.get('/api/books', (req, res) => {
    const { library } = store;
    res.json(library);
})

app.get('/api/books/:id' , (req, res) => {
    const { library } = store;
    const { id } = req.params; 
    const index = library.findIndex(book => book.id === id)

    if(index !== -1){
        res.json(library[index])
    } else {
        res.status(404), 
        res.json('404 | Страница не найдена')
    }
})

app.post('/api/books' , (req, res) => {
    const { library } = store;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName);
    library.push(newBook);
    res.status(201);
    res.json(newBook);
})

app.put('/api/books/:id' , (req, res) => {
    const { library } = store;
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
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
            fileName
        }
        res.json(library[index])
    } else {
        res.status(404), 
        res.json('404 | Страница не найдена')
    }
})

app.delete('/api/books/:id' , (req, res) => {
    const { library } = store;
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

app.listen(3000)
