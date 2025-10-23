const myLibrary = [];

function book(title, author, pages, alreadyRead){
    this.id = crypto.randomUUID(),
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.alreadyRead = alreadyRead
}


function addBookToLibrary(title, author, pages, alreadyRead){
   const Book= new book(title, author, pages, alreadyRead);

   myLibrary.push(Book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 285, true);