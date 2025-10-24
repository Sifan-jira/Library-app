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
function displayArrayBook(arrBook, tableId){
    const tableBody  = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    // clear the body
    tableBody.innerHTML= '';

    arrBook.forEach(item => {
        //create new 'tr' to the table
        const row = tableBody.insertRow();
        //to make iterate through the array
        Object.keys(item).forEach(key => {

            if(key === 'id'){ return; } // to clear the id from the display

            //create new 'td' for the row the table
            const cell = row.insertCell();
            cell.textContent = item[key];

        });
    });

}



// display the new book form to store

const addNewBookBtn = document.querySelector(".newBookAddBtn");
const newBookFormContainer = document.querySelector(".newBookAddContainer");
const newBookForm = document.querySelector(".newBookForm");

const submitBtn = document.querySelector('btn');


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
    displayArrayBook(myLibrary,'myTable');

    
})
