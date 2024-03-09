const myLibrary = [];

function Book(title, author, pages, genre, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

console.log(myLibrary);


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
    newForm.reset();
    dialog.close();
});

// Add book to library based on input
const submit = document.querySelector("#submit-btn");

const title = document.querySelector("#book_title");
const author = document.querySelector("#book_author");
const genre = document.querySelector("#book_genre");
const pages = document.querySelector("#book_pages");

function getBook() {
    return new Book(title.value, author.value, genre.value, pages.value, false);
}

// If submit and valid inputs, add book info to myLibrary list

submit.addEventListener('click', () => {
    if (title.value != "" && author.value != "" && genre.value != "" && pages.value != "") {
        myLibrary.push(getBook());
    }

});


// Display library content 
const library = document.querySelector(".lib-wrapper");
function displayLibrary() {
    for (i = 0; i <myLibrary.length; i++) {

    }
};


