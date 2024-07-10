# MongoDB Запросы

## Вставка данных

Для вставки данных о двух книгах в коллекцию `books` используйте следующий запрос:

```js
db.books.insertMany([
  {
    title: "The Great Gatsby",
    description: "A novel written by American author F. Scott Fitzgerald.",
    authors: "F. Scott Fitzgerald"
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel by Harper Lee published in 1960.",
    authors: "Harper Lee"
  }
]);
``` 
## Поиск документов по полю title 

```js
db.books.find(
  { title: "The Great Gatsby" },
  { _id: 0, title: 1, description: 1, authors: 1 }
);
``` 

## Редактирование полей description и authors по _id

```js
db.books.updateOne(
  { _id: ObjectId("YOUR_DOCUMENT_ID") },
  {
    $set: {
      description: "Updated description",
      authors: "Updated authors"
    }
  }
);
``` 