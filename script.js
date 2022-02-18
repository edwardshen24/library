const library =  document.querySelector(".library");
const addBook = document.querySelector(".addbutton");
const bookForm = document.querySelector(".modal");
const cancel = document.querySelector(".cancel");
const submit = document.querySelector(".submit");

let myLibrary = [];

class Book { 
  constructor(title, author, pages, isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  }
}

addBook.addEventListener('click', event => {
  bookForm.setAttribute("style", "display: flex; align-items: center; justify-content: center");
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
});

cancel.addEventListener('click', event => {
  bookForm.setAttribute("style", "display: none");
});

submit.addEventListener('click', event => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read =  document.getElementById("readCheck");
  let isRead = read.checked ? true: false;
  if (title == ""){
    alert("Please enter a valid book title.");
  }
  else if (author == ""){
    alert("Please enter a valid author name.");
  }
  else if (pages == "" || isNaN(pages)){
    alert("Please enter a valid page number.");
  }
  else{
    addBookToLibrary(title, author, pages, isRead);
    bookForm.setAttribute("style", "display: none");
  }
});

function addBookToLibrary(title,author,pages,isRead){
  const book = new Book(title,author,pages,isRead);
  myLibrary.push(book);
  library.textContent = ''; //clear previous cards
  myLibrary.forEach(function (item, index) {
    printCard(item , index);
  });
}

let card;
function printCard(item, index){ //runs multiple times
 card = document.createElement('div');
  const titleName = document.createElement('div');
  const authorName = document.createElement('div');
  const pagesAmount = document.createElement('div');
  const container = document.createElement('div');
  const checkMark = document.createElement('input');
  const label = document.createElement('label');
  const remove = document.createElement('button');
  label.innerHTML = "Read:"
  checkMark.type ="checkbox";
  card.className = "card";
  remove.innerHTML = "Remove";
  card.setAttribute("data-card", index);
  remove.setAttribute("data-card", index);
  remove.id = "remove";
  card.id = "card";
  remove.setAttribute("style","background-color: #C62828; border-radius: 5px;");
  container.setAttribute("style","display: flex; flex-direction: row; gap: 5px");
  titleName.textContent = "Title: " + item.title;
  authorName.textContent ="Author: "+ item.author;
  pagesAmount.textContent = "Pages: "+ item.pages;
  card.appendChild(titleName);
  card.appendChild(authorName);
  card.appendChild(pagesAmount); 
  container.appendChild(label);
  container.appendChild(checkMark);
  container.appendChild(remove);
  card.appendChild(container);
  if (item.isRead)
    checkMark.checked = true;
  library.appendChild(card);
}

document.addEventListener( "click", listen );

function listen(e){
  let element = e.target;
  if (element.id == "remove"){
    let n = element.dataset.card;
    let card = document.querySelector(` [data-card = "${n}"] `);
    card.remove();
    myLibrary.splice(n, 1);
    let cardExist =  document.getElementById('card');
    if (typeof(cardExist) == 'undefined' || cardExist == null)
      myLibrary = [];
  }
}
