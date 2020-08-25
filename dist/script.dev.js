"use strict";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = "not yet read";

  if (read) {
    this.read = "already read";
  }

  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + this.read;
  };
}

var faust = new Book('Faust', "Goethe", 478, false);
console.log(faust.info());