const library =  document.querySelector(".library");
const addBook = document.querySelector(".addbutton");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = 0;
}

const book = new Book('steve', 'james', 5);
console.log(book.author)

Book.prototype.read = function(){

}

addBook.addEventListener('click', event => {
  const card = document.createElement('div');
  card.className = "card";
  library.appendChild(card);
});