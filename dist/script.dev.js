"use strict";

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
    console.log(title + " by " + author + ", " + pages + " pages, " + this.read);
  };
}

function addBook() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function addToLibrary() {
  var newTitle = document.querySelector('.newTitle').value;
  var newAuthor = document.querySelector('.newAuthor').value;
  var pages = document.querySelector('.pages').value;
  var read;
  var radios = document.getElementsByName("read");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = radios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var r = _step.value;

      if (r.checked) {
        read = r.value;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var newBook = new Book(newTitle, newAuthor, pages, read);
  library.push(newBook);
  return newBook;
}