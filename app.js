const myLibrary = [];
const addButton = document.querySelector(".add");
const submit = document.getElementById("submit");
const wrapper = document.querySelector(".wrapper");
const closeButton = document.querySelector(".close");

addButton.addEventListener("click", toggleBookInputForm);
closeButton.addEventListener("click", toggleBookInputForm);

class Book {
    constructor(title, author, pageCount, pagesRead) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.pagesRead = pagesRead;
    }

    info() {
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
    
    if (!titleInput || !authorInput || !pagesInput || !readPagesInput) {
        displayErrorMessage();
        return;
    }
    
    toggleBookInputForm();
    const newBook = new Book(titleInput, authorInput, pagesInput, readPagesInput);
    myLibrary.push(newBook);

    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPages").value = "";
    document.getElementById("pagesRead").value = "";

    displayBooks();
});

function displayErrorMessage() {
    document.querySelector(".error-field").textContent = "Please fill out all fields before submitting!"
}

//Display myLibrary content on DOM
function displayBooks() {
    const bookshelf = document.querySelector(".bookshelf");

    //clear the bookshelf element's children
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild);
    }
    
    //Populate the bookshelf with elements created from myLibrary array
    for (let i = 0; i < myLibrary.length; i++) {
        //Create HTML elements
        const card = document.createElement("div");
        const titleSpan = document.createElement("span");
        const authorSpan = document.createElement("span");
        const progressSpan = document.createElement("span");
        const cardCloseButton = document.createElement("button");
        
        //Add event listener to card close button
        cardCloseButton.addEventListener("click", removeCard);

        //Create variables from book object values
        const titleValue = myLibrary[i].title;
        const authorValue = myLibrary[i].author;
        const pagesValue = myLibrary[i].pageCount;
        const readValue = myLibrary[i].pagesRead;
        

        //Set HTML element content to object values
        titleSpan.textContent = titleValue;
        authorSpan.textContent = `By: ${authorValue}`;
        progressSpan.textContent = `Pages Read: ${readValue} / ${pagesValue}`;
        //Temporary value for close button
        cardCloseButton.textContent = "X";
        
        //Add elements to DOM
        bookshelf.appendChild(card);
        card.appendChild(cardCloseButton);
        card.appendChild(titleSpan);
        card.appendChild(authorSpan);
        card.appendChild(progressSpan);

        //Add classes to elements
        card.classList.add("card");
        cardCloseButton.classList.add("close");
        titleSpan.classList.add("title");
        authorSpan.classList.add("author");
        progressSpan.classList.add("progress");

        //Add data attribute
        card.dataset.index=i;
    }
}

function toggleBookInputForm() {
    wrapper.classList.toggle("modal-hidden");
}

const removeCard = function(e) {
    let response = confirm("This will delete this book from your library. Are you Sure?");
    if (response === false) {
        return;
    } else if (response === true) {
        myLibrary.splice(e.target.parentNode.dataset.index);
        e.target.parentNode.remove();
    }
}