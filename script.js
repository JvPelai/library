var library = [];
const lib_bookshelf = document.getElementById('lib-bookshelf');


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = "not yet read";
  if (read == "yes") {
    this.read = "already read";
  }
  this.info = function () {
    console.log(title + " by " + author + ", " + pages + " pages, " + this.read)
  }
}

function addBook() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function addToLibrary() {
  lib_bookshelf.innerHTML = '';
  let newTitle = document.querySelector('.newTitle').value
  let newAuthor = document.querySelector('.newAuthor').value
  let pages = document.querySelector('.pages').value
  let read;
  let radios = document.getElementsByName("read");
  for (let r of radios) {
    if (r.checked) {
      read = r.value
    }
  }
  let newBook = new Book(newTitle, newAuthor, pages, read);
  library.push(newBook);
  return newBook;
}

//Display books

function renderBooks() {
  library.forEach(function (item, index) {
    renderBook(item, index);
  });
}

function renderBook(item, index) {
  let book_title = item.title;
  let book_author = document.createElement("LI");
  book_author.textContent = `${item.author}`;
  let book_pages = document.createElement("LI");
  book_pages.textContent = `${item.pages}`;
  let read_stat = document.createElement("LI");
  read_stat.textContent = `${item.read}`;


  let card = document.createElement("div");
  let card_title = document.createElement("h3");
  card_title.textContent = `${book_title}`;
  let card_info = document.createElement("Ul");
  card_info.appendChild(book_author);
  card_info.appendChild(book_pages);
  card_info.appendChild(read_stat);
  card.appendChild(card_title);
  card.appendChild(card_info);
  lib_bookshelf.appendChild(card)
}