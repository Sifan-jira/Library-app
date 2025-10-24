const myLibrary = [
];

function book(title, author, pages, readStatus){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus,
    this.id = crypto.randomUUID()
}


function addBookToLibrary(title, author, pages, readStatus){
   const Book= new book(title, author, pages, readStatus);

   myLibrary.push(Book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 285, true);
addBookToLibrary("skyline", "watson", 225, false);
addBookToLibrary("animal farm", "george orwell", 385, true);
addBookToLibrary("the kite runnner", "shruden M.", 262, false);

//display books on the page
function displayArrayBook(books, containerId){
    const container = document.getElementById(containerId);

    container.innerHTML= ''; //clear the contents

    
    // create loops that iterate through the array books
    books.forEach(book => {
        //create div for cards
        const bookCards=document.createElement('div');
        bookCards.className='book-card'; // add class for styling

        // create elements for book info

        const titleElement = document.createElement('h3');
        titleElement.textContent = book.title;
        bookCards.appendChild(titleElement);

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;
        bookCards.appendChild(authorElement);

        const pageElement = document.createElement('p');
        pageElement.textContent =`Pages: ${book.pages}`;
        bookCards.appendChild(pageElement);

        const statusElement = document.createElement('p');
        statusElement.textContent =`Read status: ${book.readStatus}`;
        bookCards.appendChild(statusElement);

        container.appendChild(bookCards);

    });
}

    displayArrayBook(myLibrary,'display-container');

const addNewBookBtn = document.querySelector(".newBookAddBtn");
const newBookFormContainer = document.querySelector(".newBookAddContainer");
const newBookForm = document.querySelector(".newBookForm");

const submitBtn = document.querySelector('.btn');


addNewBookBtn.addEventListener('click', () =>{
    newBookFormContainer.style.display= 'block';
})

newBookForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = +document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').checked;

    const newBook= addBookToLibrary(title,author, pages, readStatus);
    console.log(myLibrary);

    newBookForm.reset();
    newBookFormContainer.style.display= 'none';


    //displayArrayBook(newBook,'myTable');
    event.target.reset();
    displayArrayBook(myLibrary,'display-container');

    
})
