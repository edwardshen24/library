const library =  document.querySelector(".library");
const addBook = document.querySelector(".addbutton");
const bookForm = document.querySelector(".modal");
const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submit");
let myLibrary = [];

class Book { //class constructor 
  constructor(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
}
  isRead(){
    return false;
  }
}

addBook.addEventListener('click', event => {
  bookForm.setAttribute("style", "display: flex; align-items: center; justify-content: center");
});

cancel.addEventListener('click', event => {
  bookForm.setAttribute("style", "display: none");
});

submit.addEventListener('click', event => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  addBookToLibrary(title, author, pages);
  bookForm.setAttribute("style", "display: none");
});


function addBookToLibrary(title,author,pages){
  const book = new Book(title,author,pages);
  myLibrary.push(book);
  printCard();
  console.log(myLibrary)
}

function printCard(){
  const card = document.createElement('div');
  card.className = "card";
  library.appendChild(card);
}



