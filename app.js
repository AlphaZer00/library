const myLibrary = [];
const addButton = document.querySelector(".add");
const submit = document.getElementById("submit");
const wrapper = document.querySelector(".wrapper");
const closeButton = document.querySelector(".close");

addButton.addEventListener("click", toggleBookInputForm);
closeButton.addEventListener("click", toggleBookInputForm);

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

//Construct book object from modal input and add to myLibrary
submit.addEventListener("click", function createBookFromInput(e) {
    e.preventDefault();
    const titleInput = document.getElementById("bookTitle").value;
    const authorInput = document.getElementById("bookAuthor").value;
    const pagesInput = document.getElementById("bookPages").value;
    const readPagesInput = document.getElementById("pagesRead").value;
    
    const newBook = new Book(titleInput, authorInput, pagesInput, readPagesInput);
    myLibrary.push(newBook);
    displayBooks();
});


function toggleBookInputForm() {
    wrapper.classList.toggle("modal-hidden")
}

//Display myLibrary content on DOM
function displayBooks() {
    const bookshelf = document.querySelector(".bookshelf");

    const card = document.createElement("div");
    const titleSpan = document.createElement("span");
    const authorSpan = document.createElement("span");
    const pagesSpan = document.createElement("span");
    const readSpan = document.createElement("span");

    const titleValue = myLibrary[myLibrary.length-1].title;
    const authorValue = myLibrary[myLibrary.length-1].author;
    const pagesValue = myLibrary[myLibrary.length-1].pageCount;
    const readValue = myLibrary[myLibrary.length-1].pagesRead;

    titleSpan.textContent = titleValue;
    authorSpan.textContent = authorValue;
    pagesSpan.textContent = pagesValue;
    readSpan.textContent = readValue;

    bookshelf.appendChild(card);
    card.appendChild(titleSpan);
    card.appendChild(authorSpan);
    card.appendChild(pagesSpan);
    card.appendChild(readSpan);
}