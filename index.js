const express = require ('express')
const app = express();
const PORT =3000;

//Middleware to pass JSON Body
app.use(express.json());

//In-memory Storage (array of books)
let books = [
    {id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// Simple route (Route 1)
app.get('/' , (req , res) =>{
    res.send("Welcome to Books API");
});

// ALL THE ROUTES LIKE GET , POST , PUT , DELETE WILL START FROM HERE

//GET alll books
app.get('/books', (req,res)=>{
    res.json(books);
});

//GET a single book by ID
app.get('/books/:id' , (req,res)=>{
    const id= parseInt(req.params.id);
    const book= books.find(b=>b.id===id);

    if(!book){
        return res.status(404).json({message:"Book not found"})
    }
    res.json(book);
})

//POST - Add a new book
app.post('/books', (req,res)=>{
    const {title,author}=req.body;

    if(!title || !author){
        return res.status(400).json({message:"Title and Author are required"});
    }
    const newBook={
        id: books.length +1,
        title,
        author
    };
books.push(newBook);
res.status(201).json(newBook);
});


//  PUT - Update a book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

//  DELETE a book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.json({ message: "Book deleted successfully" });
});



//Route 2
app.get('/hello' , (req , res) =>{
    res.send('Hello world Pratham ')
});



//Start server

app.listen(PORT , () =>{

    console.log(`Server is running on http://localhost:${PORT}`);
});

/*
Concept                       Explanation
app.use(express.json())       Middleware that allows reading JSON from request body
books array                   In-memory database
req.params.id                 Getting ID from URL
req.body                      Getting data sent in POST/PUT request
res.status().json()           Sending proper status code + JSON response


cd "C:\Users\Pratham Rajput\OneDrive\Desktop\wad practicals 108\books-api"
*/