const myLibrary = [];

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
    myLibrary.push(book);
}


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

