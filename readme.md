# Basic Express

Pokemon project:

- Express
- Joi
- Fs

---

## URL

_Server_

```
http://localhost:3000/api
```

---

## Global Response

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## RESTful endpoints

### GET /transaction

> Get all transaction include books

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{

    "data": [<data_spesific>],

    "status": "Success"

}
```

---

### GET /transaction/:id

> Get transaction by ID

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{

    "data": {<data_spesific>}

    "status": "Success"

}
```

_Response (404 - Data Not Found)_

```
{
    "message": "Transaction Not Found"
}
```

---

### POST /transaction/create

> Create transaction

_Request Header_

```
not needed
```

_Request Body_

```
{
        "bookIDs":[<existed_book.id>],
        "buyerName": "<name>",
        "email": "<email>",
        "phoneNumber": "<phoneNumber>"
}
```

_Response (201)_

```
{
    "message": "Transaction Created..."
}
```

_Response (400 - Validation Failed)_

```
{
    "status": "Validation Failed",
    "message": "\"buyerName\" is not allowed to be empty"
}
```

_Response (400 - Book with id already have transactionID)_

```
{
    "message": "Book with ID <id> sold out..."
}
```

_Response (404 - Book with id not found)_

```
{
    "message": "Book with ID <id> not found..."
}
```

---

### DELETE /transaction/delete/:id

> Delete transaction by id

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": "Transaction have been deleted"
}
```

_Response (404 - Error Not Found)_

```
{
    "message": "Transaction Not Found"
}
```

---

### GET /genre

> Get Genre include books

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```

{

"data": [<data_spesific>],

"status": "Success"

}

```

---

### GET /book

> Get Genre include books

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200)_

```

{

"data": [<data_spesific>],

"status": "Success"

}

```

---

### GET /book/:id

> Get book by ID

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{

    "data": {<data_spesific>}

    "status": "Success"

}
```

_Response (404 - Data Not Found)_

```
{
    "message": "Book Not Found"
}
```

---

### POST /book/create

> Create Book

_Request Header_

```
not needed
```

_Request Body_

```
{
    "genreIDs":[<genre_data>],
    "name": "<book_name>",
    "description": "<book_description>"
}
```

_Response (201)_

```
{
    "message": "Book Created..."
}
```

_Response (400 - Validation Failed)_

```
{
    "status": "Validation Failed",
    "message": "\"name\" is not allowed to be empty"
}
```

_Response (400 - Book Name already exist)_

```
{
    "message": "Book with name <newdata_name> already exist..."
}
```

---

### PUT /book/edit/:id

> Edit Book

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
{
    "name": "<name>",
    "description": "<description>"
}
```

_Response (200)_

```
{
    "message": "Book Updated..."
}
```

_Response (400 - Validation Failed)_

```
{
    "status": "Validation Failed",
    "message": "\"name\" is not allowed to be empty"
}
```

_Response (400 - Selected book already have transactionID)_

```
{
    "message": "Book with name <newdata_name> sold out..."
}
```

_Response (404 - Error Not Found)_

```
{
    "message": "Book Not Found"
}
```

---
