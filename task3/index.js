let books = [
  { id: 1, 
    title: "c++",
     author: "yuvika",
      pages: 155,
       isRead: true
       },
  { id: 2,
     title: "c#",
      author: "uv",
       pages: 200,
        isRead: false
       },
  {
    id: 3,
    title: "web development",
    author: "yuvika_kumar",
    pages: 305,
    isRead: true,
  },
  { id: 4, title: "data science", author: "richa", pages: 105, isRead: true },
  {
    id: 5,
    title: "mySql",
    author: "aashish_kumar_garg",
    pages: 172,
    isRead: false,
  },
  { id: 6,
     title: "accounting",
      author: "muskan",
       pages: 109,
        isRead: false
       },
  {
    id: 7,
    title: "Artificial Intelligence",
    author: "makul_kumar",
    pages: 300,
    isRead: true,
  },
  {
    id: 8,
    title: "Physical Education",
    author: "madhav_kumar",
    pages: 155,
    isRead: true,
  },
  { id: 9,
     title: "java", 
     author: "gaganjot_kaur", 
     pages: 255, 
     isRead: false
     },
  {
    id: 10,
    title: "advanced java",
    author: "payal_sharma",
    pages: 100,
    isRead: true,
  },
];



function displayBooks() {
  books.map(function (card) {
    let full_name = card.author.split("_").map((name) => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()).join(" ");
    console.log( `The book is "${card.title}" and the author of this book is "${full_name}"`);
  });
}


function searchBooks(searchBook) {
  let searchText = searchBook.toLowerCase(); 
  let foundBooks = books.filter(function (book) {
    return book.title.toLowerCase().includes(searchText);
  });

  if (foundBooks.length === 0) {
    console.log("No book with this name is present");
  } else {
    console.log(foundBooks);
  }
}

function totalPages() {
  console.log(
    "Total number of pages : ",
    books.reduce(function (total, book) {
      return total + book.pages;
    }, 0)
  );
}

function pagesRead() {
  console.log(
    "Total number of pages read : ",
    books.reduce(function (total, book) {
      if (book.isRead) {
       total=total + book.pages;
      }
      return total;
    }, 0)
  );
}


function toggleReadingStatus(id) {
  let bookToUpdate = books.find(book => book.id === id); 
  
  if (bookToUpdate) {
    bookToUpdate.isRead = !bookToUpdate.isRead;
    console.log(`Book with ID ${id} is now marked as ${bookToUpdate.isRead ? 'read' : 'unread'}.`);
  } else {
    console.log(`Book with ID ${id} is not found.`);
  }
}

function sortBooks() {
  console.log(books.sort((a, b) => a.pages - b.pages));
}

function addBook(title, author, pages, isRead) {
  if (typeof title !== 'string' || typeof author !== 'string' || typeof pages !== 'number' || typeof isRead !== 'boolean') {
    alert("Please enter valid input types: title and author must be of type string, pages of type number, and reading status must be boolean.");
  } else {
    let newBook = { id: books.length + 1, title, author, pages, isRead };
    books.push(newBook);
    console.log(`The book "${title}" by ${author} has been added to the library.`, books);
  }
}

function removeBook(bookid) {
  let removedBook = books.find(book => book.id === bookid);
  if (removedBook) {
    books = books.filter(book => book.id !== bookid );
    console.log(`"${removedBook.title}" has been removed from the library.`,books);
  } else {
    console.log(`Book with ID ${bookid} is not found in the library.`);
  }
}


  let functionNumber = prompt(`Enter the number corresponding to the function you want to execute:
  1. Display Books
  2. Search Books
  3. Total Pages
  4. Pages Read
  5. Toggle Reading Status
  6. Sort Books
  7. Add Book
  8. Remove Book`);

  switch (parseInt(functionNumber)) {
    case 1:
      displayBooks();
      break;
    case 2:
      let searchBook = prompt("Enter the book title:");
    if (searchBook) {
      searchBooks(searchBook);
    } else {
      console.log("No input provided.");
    }
      break;
    case 3:
      totalPages();
      break;
    case 4:
      pagesRead();
      break;
    case 5:
      let toggleArg = parseInt(prompt("Enter the ID of the book:"));
      if (toggleArg) {
        toggleReadingStatus(toggleArg)
      } else {
        console.log("No input provided.");
      }
      break;
    case 6:
      sortBooks();
      break;
    case 7:
      let title = prompt("Enter title:");
    let author = prompt("Enter author name:");
    let pages = parseInt(prompt("Enter number of pages:"));
    let isReadInput = prompt("Has the book been read? (yes/no)");
  
    let isRead;
    if (isReadInput.toLowerCase() === 'yes') {
      isRead = true;
    } else if (isReadInput.toLowerCase() === 'no') {
      isRead = false;
    } 
  
    if (title && author && !isNaN(pages)) {
      addBook(title, author, pages, isRead);
    } else {
      alert("Please enter valid inputs.");
    }
      break;
    case 8:
      let removeArg = parseInt(prompt("Enter the ID of the book to remove:"));
      if(!isNaN(removeArg)){ 
        removeBook(removeArg);
      }
      else {
        console.log("No input provided.");
      }
      break;
    default:
      console.log("Invalid function name.");

}

  

 
  


 