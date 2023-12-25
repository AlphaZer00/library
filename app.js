const myLibrary = [];
const addButton = document.querySelector(".add");

addButton.addEventListener("click", showBookInputForm);

// Book constructor function
function Book(title, author, pageCount, pagesRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.pagesRead = pagesRead;
    this.info = function() {
        message = `${title} by ${author}, Progress:${this.pagesRead} pages out of ${this.pageCount}`
    }
}

function createBookFromInput() {
    // Call book constructor and add book object to myLibrary Array
}

function showBookInputForm() {
    // Change input form's display property in CSS
}