const library =  document.querySelector(".library");
const addBook = document.querySelector(".addbutton");


let myLibrary = [];



class Book { //class constructor 
  constructor(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = 0;
}
  isRead(){
    return false;
  }
}

addBook.addEventListener('click', event => {
  //addBookToLibrary();
  //bookForm.setAttribute("style", "display: block");
});

function addBookToLibrary(){
  const book = new Book('steve', 'james', 5);
  myLibrary.push(book);
  printCard();
  console.log(myLibrary)
}

function printCard(){
  const card = document.createElement('div');
  card.className = "card";
  library.appendChild(card);
}



