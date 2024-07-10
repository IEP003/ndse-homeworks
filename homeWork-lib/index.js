const express = require('express');
const booksRouter = require('./routes/booksAPIRouter.js');
const userRouter = require('./routes/userRouter.js');
const viewsRouter = require('./routes/viewsRouter.js');
const errMiddleware = require('./middleware/err.js');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use('/api/books', booksRouter);
app.use('/login', userRouter);
app.use('/', viewsRouter);
app.use(errMiddleware);

app.listen(PORT, console.log(`Сервер запущен: http://localhost:${PORT}/`))