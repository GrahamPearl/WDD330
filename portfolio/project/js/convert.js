import "Bib2JSON.js";

var text = `@book{rowling2000harry,
    title={Harry Potter and the Sorcerer's Stone},
    author={Rowling, J.K. and Grandpr, M.},
    isbn={9780439203524},
    series={Harry Potter},
    url={https://books.google.co.za/books?id=mvmGPgAACAAJ},
    year={2000},
    publisher={Scholastic}
  }
  `;
var entries = BibtexParser(text);
console.log(entries);