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
  let read =  document.getElementById("readCheck")
  let isRead;
    if (read.checked)
      isRead = true;
    else  
      isRead = false;
  addBookToLibrary(title, author, pages,isRead);
  bookForm.setAttribute("style", "display: none");
});


function addBookToLibrary(title,author,pages,isRead){
  const book = new Book(title,author,pages,isRead);
  myLibrary.push(book);
  printCard(title,author,pages,isRead);
  console.log(myLibrary)
}

function printCard(title,author,pages,isRead){
  const card = document.createElement('div');
  const titleName = document.createElement('div');
  const authorName = document.createElement('div');
  const pagesAmount = document.createElement('div');
  const checkMark = document.createElement('input');
  checkMark.value = "read";
  const label = document.createElement('label')
  label.innerHTML = 'Read:';
  checkMark.type ="checkbox";
  card.className = "card";
  titleName.textContent = "Title: " + title;
  authorName.textContent ="Author: "+ author;
  pagesAmount.textContent = "Pages: "+ pages;
  card.appendChild(titleName);
  card.appendChild(authorName);
  card.appendChild(pagesAmount);
  card.appendChild(label)
  card.appendChild(checkMark);
  if (isRead)
    checkMark.checked = true;
  library.appendChild(card);
}



