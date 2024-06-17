const express = require('express');
const booksRouter = require('./route/booksRouter.js');
const userRouter = require('./route/userRouter.js')

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter);
app.use('/login', userRouter);

app.listen(3000)
