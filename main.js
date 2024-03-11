var myLibrary = [];

function Book(id, title, author, pages, genre, read) {
  // the constructor...
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.read = read;
};

// Display all library content in lib-wrapper div
const lib_wrapper = document.querySelector(".lib-wrapper");
function displayLibrary() {
    lib_wrapper.innerHTML = ''; // reset books wrapper
    for (i = 0; i <myLibrary.length; i++) {
        lib_wrapper.innerHTML += `<div class="lib-card">
        <div class="card-title">
            <p>${myLibrary[i].title}</p>
            <div class="card-author">${myLibrary[i].author}</div>
        </div>

        <div class="card-pages">${myLibrary[i].pages} Pages</div>
        <div class="card-genre">${myLibrary[i].genre}</div>
        <div class="card-read-status">
            <p>Have you read this book?</p>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>
        <div class="card-delete">
            <button href="#" class="delete-icon-wrapper" id="${myLibrary[i].id}" onClick="removeBook(this.id)">
                <svg id="card-del" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path fill="#7aa7c7" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            </button>     
        </div>
    </div>`;
    }
};

// Add first sample entry
// const sample = new Book(0,"Harry Potter and the Sorcerer's Stone","J.K. Rowling", 263, "Fantasy Fiction", false); 
// myLibrary.push(sample);
// displayLibrary();


// Add new book dialog modal
const newForm = document.querySelector("#input-form");

const dialog = document.querySelector("dialog");
const openModal = document.querySelector("#add-book");
const closeModal = document.querySelector("#close-modal");

// "Show the dialog" button opens the dialog modally
openModal.addEventListener("click", () => {
    newForm.reset();
    dialog.showModal();
});

// "Close" button closes the dialog
closeModal.addEventListener("click", () => {
    dialog.close();
});




// Add book to library based on input
const submit = document.querySelector("#submit-btn");

const title = document.querySelector("#book_title");
const author = document.querySelector("#book_author");
const genre = document.querySelector("#book_genre");
const pages = document.querySelector("#book_pages");

var id = 0; // ID num for each entry 

function getBook() {
    return new Book(id++, title.value, author.value, genre.value, pages.value, false);
}


// If submit and valid inputs, add book info to myLibrary list
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value != "" && author.value != "" && genre.value != "" && pages.value != "") {
        myLibrary.push(getBook());
    }
    dialog.close();

    console.log(myLibrary);
    displayLibrary();
});

// Delete book based on id
function removeBook(id) {
    console.log(id);
    myLibrary = myLibrary.filter((book) => book.id != id);
    displayLibrary();
}


// Read Toggle switch connect to 




