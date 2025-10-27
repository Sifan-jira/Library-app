let myLibrary = [
];

function book(title, author, pages, readStatus){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus,
    this.id = crypto.randomUUID()
}

book.prototype.toggleReadStatus= function() {
    this.readStatus = !this.readStatus
}


function addBookToLibrary(title, author, pages, readStatus){

    const newBookId = Date.now();
   const Book= new book(title, author, pages, readStatus);
   Book.id =newBookId;

   myLibrary.push(Book);
   return Book; // return the created book
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
        bookCards.dataset.bookId = book.id;

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

        const statusElement = document.createElement('button');
        statusElement.className= "read-btn";
        const readStatusClass = book.readStatus ? 'bg-green-500' : 'bg-red-500';
        statusElement.classList.add(readStatusClass);
        statusElement.setAttribute('data-index', books.indexOf(book))
        statusElement.textContent = book.readStatus ? 'Read' : 'Not read';
        
        bookCards.appendChild(statusElement);

        // add remove btn to remove one specific book
        const removeBtn = document.createElement('button');
        removeBtn.className = "remove-btn";
        removeBtn.textContent = `Remove`;

        bookCards.appendChild(removeBtn);

        removeBtn.addEventListener('click', ()=>{
            removeBook(book.id)
        });

        container.appendChild(bookCards);

    });
    toggleReadListener();
}
 displayArrayBook(myLibrary,'display-container');

 //attach toggle to the read button

 function toggleReadListener(){
    const toggleBtn = document.querySelectorAll('.read-btn');
     
    toggleBtn.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            const bookIndex = e.target.dataset.index;

            myLibrary[bookIndex].toggleReadStatus();
            displayArrayBook(myLibrary,'display-container');
        })
        
    });
 }

function removeBook(bookId){
    // remove from the array
    myLibrary = myLibrary.filter(book => book.id !== bookId);

    // re-render list (no need to manually remove DOM node)
    displayArrayBook(myLibrary,'display-container');
}


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

    // reset and hide the form
    event.target.reset();
    newBookFormContainer.style.display= 'none';

    // refresh the card view
    displayArrayBook(myLibrary,'display-container');

})

//to change the toggle color of read status

document.addEventListener('DOMContentLoaded', function(){
    const toggleColorBtn= document.querySelectorAll('.read.btn');

    toggleColorBtn.addEventListener('click',function(){
        toggleColorBtn.classList.toggle('active');
    });
});
