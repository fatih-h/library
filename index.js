let myLibrary = [];

const title = document.getElementById('title');
const author = document.getElementById('author');
const page = document.getElementById('page');

document.getElementById('addBook').addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, page.value);
});


function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
}

function addBookToLibrary(i, j, k) {
  return myLibrary.push(new Book(i, j, k))
}

function display() {
  myLibrary.forEach(e => {

  });
}
