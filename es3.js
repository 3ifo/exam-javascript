//Esercizio 3

const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

book.rating = 6;
book.increaseRating = function (valoreNumerico) {
  this.rating += valoreNumerico;
  if (this.rating > 10) {
    this.rating = 10;
  }
};
delete book.year;

const chiavi = Object.keys(book);

// forse avrei potuto anche usare un for in ma mi sentivo piu sicuro in questo modo
for (let i = 0; i < chiavi.length; i++) {
  const chiave = chiavi[i];
  console.log(`${chiave}: ${book[chiave]}`);
}
