# web-development-internship-elevate-labs-Task-3
# 📚 Books API

A simple RESTful API built using **Node.js** and **Express.js** that allows users to manage a collection of books. It supports all the basic CRUD operations — Create, Read, Update, and Delete — using HTTP methods and JSON data.

This project is designed to understand the fundamentals of backend development, routing, middleware, and handling HTTP requests and responses using Express.js.

## 🚀 Features

- **Get All Books:** Retrieve the complete list of books.
- **Get Book by ID:** Fetch details of a specific book using its ID.
- **Add a New Book:** Add a book by providing its title and author.
- **Update a Book:** Modify the title or author of an existing book.
- **Delete a Book:** Remove a book from the collection using its ID.
- **Welcome Route:** Display a welcome message on the home route.
- **Hello Route:** Display a simple Hello World message.
- **JSON Middleware:** Handle incoming JSON request bodies.
- **Error Handling:** Return appropriate HTTP status codes and error messages when a book is not found or required fields are missing.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Framework for building the API |
| JavaScript | Backend programming language |
| JSON | Format for sending and receiving data |
| Postman / Thunder Client | Testing API endpoints |

## 📂 Project Structure

```text
books-api/
│
├── index.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Install Node.js

Download and install Node.js from the official website:

https://nodejs.org/

Verify the installation:

```bash
node -v
npm -v
```

### 2. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Navigate to the project folder:

```bash
cd books-api
```

### 3. Install Dependencies

```bash
npm install
```

If Express.js is not already listed in your dependencies, install it using:

```bash
npm install express
```

### 4. Start the Server

If your main file is named `server.js`, run:

```bash
node server.js
```

The server will start at:

```text
http://localhost:3000
```

You should see the following message in the terminal:

```text
Server is running on http://localhost:3000
```

## 🔗 API Endpoints

The following endpoints are available in this project.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Returns the API welcome message |
| GET | `/hello` | Returns a Hello World message |
| GET | `/books` | Retrieves all books |
| GET | `/books/:id` | Retrieves a book by ID |
| POST | `/books` | Adds a new book |
| PUT | `/books/:id` | Updates an existing book |
| DELETE | `/books/:id` | Deletes a book |

## 🧪 API Usage Examples

### 1. Welcome Route

**Request:**
```http
GET /
```

**Response:**
```text
Welcome to Books API
```

### 2. Get All Books

**Request:**
```http
GET /books
```

**Example response:**
```json
[
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "id": 2,
    "title": "Atomic Habits",
    "author": "James Clear"
  }
]
```

### 3. Get a Book by ID

**Request:**
```http
GET /books/1
```

**Example response:**
```json
{
  "id": 1,
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
```

If the requested book does not exist, the API returns a `404 Not Found` response.

### 4. Add a New Book

**Request:**
```http
POST /books
```

Set the request body type to **JSON** in Postman or Thunder Client.

**Request body:**
```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin"
}
```

**Example response:**
```json
{
  "id": 3,
  "title": "Clean Code",
  "author": "Robert C. Martin"
}
```

The API returns `201 Created` when a book is successfully added.

If the title or author is missing, it returns `400 Bad Request`.

### 5. Update a Book

**Request:**
```http
PUT /books/1
```

**Request body:**
```json
{
  "title": "The Alchemist - Updated Edition",
  "author": "Paulo Coelho"
}
```

The API updates the provided fields and returns the updated book.

You can also provide only one field, such as `title`, to update just that field.

### 6. Delete a Book

**Request:**
```http
DELETE /books/1
```

**Example response:**
```json
{
  "message": "Book deleted successfully"
}
```

If the book does not exist, the API returns `404 Not Found`.

### 7. Hello Route

**Request:**
```http
GET /hello
```

**Response:**
```text
Hello world Pratham
```

## 🧠 Key Concepts Learned

- **Express Server:** Creating and starting a server using `express()` and `app.listen()`.
- **Routing:** Defining endpoints using `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.
- **Middleware:** Using `express.json()` to parse incoming JSON request bodies.
- **Route Parameters:** Using `req.params.id` to access a book's ID from the URL.
- **Request Body:** Using `req.body` to access data sent by the client.
- **Array Methods:** Using `find()`, `findIndex()`, and `splice()` to manage book records.
- **HTTP Status Codes:** Using codes such as `200`, `201`, `400`, and `404` to communicate the result of a request.
- **CRUD Operations:** Implementing the four fundamental operations used in REST APIs.

## 💾 Data Storage

This project uses an in-memory JavaScript array to store book records.

This means:
- Books can be added, updated, and deleted while the server is running.
- The initial sample books are loaded whenever the application starts.
- Changes are not permanently saved.
- Restarting the server resets the data to the original sample collection.

No database is required for the current version.

## ⚠️ Limitations

- Data is stored only in memory.
- Book IDs are generated using `books.length + 1`, which can cause duplicate IDs after certain deletion and addition sequences.
- Input validation is basic.
- The API does not include authentication or authorization.
- The project is intended for learning and demonstration purposes rather than production use.

## 🔮 Future Enhancements

- Integrate a database such as MongoDB or MySQL for persistent storage.
- Implement more reliable unique ID generation.
- Improve request validation and error handling.
- Add search and filtering functionality.
- Implement authentication and authorization.
- Add automated API tests.

## 🎯 Project Objective

The main objective of this project is to understand how RESTful APIs work and how a backend application receives requests, processes data, and returns responses. It provides practical experience with Express.js routing, middleware, CRUD operations, HTTP status codes, and JSON communication.

## 👨‍💻 Author

**Pratham Singh**

- GitHub: [pratham-codes8735](https://github.com/pratham-codes8735)
- LinkedIn: [Pratham Singh](https://linkedin.com/in/pratham-singh-302a652b7)

---

⭐ If you find this project useful for learning backend development, feel free to explore the code and build upon it.
