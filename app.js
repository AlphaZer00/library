const myLibrary = [];
const addButton = document.querySelector(".add");
const submit = document.getElementById("submit");

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

//Construct book object from modal input and add to myLibrary
submit.addEventListener("click", function createBookFromInput(e) {
    e.preventDefault();
    const titleInput = document.getElementById("bookTitle").value;
    const authorInput = document.getElementById("bookAuthor").value;
    const pagesInput = document.getElementById("bookPages").value;
    const readPagesInput = document.getElementById("pagesRead").value;
    
    const newBook = new Book(titleInput, authorInput, pagesInput, readPagesInput);
    myLibrary.push(newBook);
    console.table(myLibrary);
});

function showBookInputForm() {
    // Change input form's display property in CSS
}

//Display myLibrary content on DOM
function displayBooks() {
    const bookshelf = document.querySelector(".bookshelf");

    for(let i=0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        const titleSpan = document.createElement("span");
        const authorSpan = document.createElement("span");
        const pagesSpan = document.createElement("span");
        const readSpan = document.createElement("span");

        const titleValue = myLibrary[i].title;
        const authorValue = myLibrary[i].author;
        const pagesValue = myLibrary[i].pageCount;
        const readValue = myLibrary[i].pagesRead;

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
}