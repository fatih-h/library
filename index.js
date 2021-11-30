const myLibrary = [];
const list = document.getElementById('list');

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new
        Book(form.elements[0].value, form.elements[1].value, form.elements[2].value);
    book.addBookToLibrary();
});

function Book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = 'Not Read';
}

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
    this.display();
}
Book.prototype.removeBookFromLibrary = function () {
    const index = myLibrary.indexOf(this);
    if (index > -1) {
        myLibrary.splice(index, 1);
    }

}

Book.prototype.changeReadStatus = function () {
    if (this.read === 'Not Read') {
        this.read = 'Read';
    } else {
        this.read = 'Not Read';
    }
}

Book.prototype.display = function () {

    let theBook = document.createElement("h2");
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let author = document.createElement("h3");
    let page = document.createElement("h3");
    let read = document.createElement("button");
    let del = document.createElement("button");

    document.getElementById("shelf").appendChild(div);
    div.append(theBook);
    div.append(title);
    div.append(author);
    div.append(page);
    div.append(read);
    div.append(del);

    theBook.innerText = "Book";
    title.innerText = 'Title: ' + this.title;
    author.innerText = 'Author: ' + this.author;
    page.innerText = 'Number of Pages: ' + this.page;
    read.innerText = this.read;
    del.innerText = 'Delete';


    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerText = this.title;


    read.addEventListener('click', (e) => {
        this.changeReadStatus();
        read.innerText = this.read;
    });

    del.addEventListener('click', (e) => {

        listItem.remove();
        this.removeBookFromLibrary();
        e.target.parentElement.remove();

    });
}
