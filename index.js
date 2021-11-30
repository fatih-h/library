const myLibrary = [];
const list = document.getElementById('list');

/**taking form value using event listener */
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new
        Book(form.elements[0].value, form.elements[1].value, form.elements[2].value);
    book.addBookToLibrary();
});

/**Book constructor function */
function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = 'Not Read';
}

/**object based dynamical add signal */
Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
    this.display();
}

/**object based dynamical remove signal */
Book.prototype.removeBookFromLibrary = function () {
    const index = myLibrary.indexOf(this);
    if (index > -1) {
        myLibrary.splice(index, 1);
    }

}

/**object based dynamical change signal */
Book.prototype.changeReadStatus = function () {
    if (this.read === 'Not Read') {
        this.read = 'Read';
    } else {
        this.read = 'Not Read';
    }
}

/**To display added New Items*/
Book.prototype.display = function () {
    /** Creating element for Card*/
    let theBook = document.createElement("h3");
    let div = document.createElement("div");
    let title = document.createElement("h4");
    let author = document.createElement("h4");
    let page = document.createElement("h4");
    let read = document.createElement("button");
    let del = document.createElement("button");

    /**Adding elements to build Card*/
    document.getElementById("shelf").appendChild(div);
    div.append(theBook);
    div.append(title);
    div.append(author);
    div.append(page);
    div.append(read);
    div.append(del);

    /**Adding class to same type buttons for css*/
    read.classList.add("reading");
    del.classList.add("deleting");

    /**Changing text dynamically */
    theBook.innerText = "Book";
    title.innerText = 'Title: ' + this.title;
    author.innerText = 'Author: ' + this.author;
    page.innerText = 'Pages: ' + this.page;
    read.innerText = this.read;
    del.innerText = 'Delete';

    /**Adding text to sidebar dynamically */
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerText = this.title;

    /**event listener to read button dynamically */
    read.addEventListener('click', (e) => {
        this.changeReadStatus();
        read.innerText = this.read;
    });

    /**event to delete button dynamically */
    del.addEventListener('click', (e) => {

        listItem.remove();
        this.removeBookFromLibrary();
        e.target.parentElement.remove();

    });
}
