var library = [];

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