const myLibrary = [];
const mainContent = document.querySelector('.main-content')

function Book(name, author,pages, status) {
  if(!new.target){
    throw Error("No se ha usado NEW");
  }
  this.id = crypto.randomUUID();
  this.name = name;
  this. author =  author;
  this.pages = pages;   
  this.status = status;
}

function addBookToLibrary(name, author,pages, status) {
    let book = new Book(name, author,pages, status);
    createBookCard(book);
    myLibrary.push(book);
    console.log(book);
}

const submitBtn = document.querySelector('.header-form :last-child');

const form = document.querySelector('.book-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('POST-name').value;
    const author = document.getElementById('POST-author').value;
    const pages = document.getElementById('POST-pages').value;
    const status = document.getElementById('POST-status').value;

    addBookToLibrary(name, author, pages, status);

    form.reset();
});



function createBookCard(book){

// Creamos la Tarjeta con la informacion correspondiente;
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");

    let title = document.createElement("h3");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let status = document.createElement("p");

    title.textContent = book.name;
    author.textContent = book.author;
    pages.textContent = book.pages;
    status.textContent = book.status;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(status);

    mainContent.appendChild(bookCard);
}


// Ejemplos 
addBookToLibrary("1984", "George Orwell", 328, "read");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, "read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "not read yet");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 224, "not read yet");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, "not read yet");
addBookToLibrary("The Da Vinci Code", "Dan Brown", 454, "read");
addBookToLibrary("The Shining", "Stephen King", 447, "not read yet");
addBookToLibrary("The Alchemist", "Paulo Coelho", 197, "read");
addBookToLibrary("The Chronicles of Narnia", "C.S. Lewis", 767, "not read yet");

  

