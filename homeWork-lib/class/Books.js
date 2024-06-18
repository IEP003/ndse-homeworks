const { v4:uuid } = require('uuid')

class Book { 
    constructor(title = "Книга", description = "Книга простая", authors = "не известно", favorite = "?", fileCover = "??", fileName = "???", fileBook = "нету", id=uuid()){
        this.title = title,
        this.description = description,
        this.authors = authors,
        this.favorite = favorite,
        this.fileCover = fileCover,
        this.fileName = fileName,
        this.fileBook = fileBook,
        this.id = id
    }
}

module.exports = Book