const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", maxPages: 200, onPage: 60 },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    maxPages: 250,
    onPage: 150,
  },
  {
    title: "50 Shades of Grey",
    author: "E. L. James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];

const unorderedList1 = document.querySelector("#unorderedList1");

books.forEach((book) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${book.title} by ${book.author}`;
  unorderedList1.appendChild(listItem);
});

const unorderedList2 = document.querySelector("#unorderedList2");

books.forEach((book) => {
  const listItem = document.createElement("li");

  if (book.onPage < book.maxPages) {
    listItem.textContent = `You still need to read ${book.title} by ${book.author}.`;
    listItem.style.color = "red";
  } else if (book.onPage === book.maxPages) {
    listItem.textContent = `You already read ${book.title} by ${book.author}.`;
    listItem.style.color = "green";
  }

  unorderedList2.appendChild(listItem);
});

const tbody = document.querySelector("#showProgress");

books.forEach((book) => {
  const progressPercentage = Math.ceil((book.onPage / book.maxPages) * 100);
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.maxPages}</td>
      <td>${book.onPage}</td>
      <td>
        <div class="myProgress">
          <div class="myBar" style=" width: ${progressPercentage}%;">${progressPercentage}%</div>
        </div>
      </td>`;
  tbody.appendChild(row);
});

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let booksTitle = document.querySelector("#booksTitle").value.trim();
  let booksAuthor = document.querySelector("#booksAuthor").value.trim();
  let currentPage = document.querySelector("#currentPage").value.trim();
  let booksMaxPages = document.querySelector("#booksMaxPages").value.trim();

  if (
    booksTitle === "" ||
    booksAuthor === "" ||
    currentPage === "" ||
    booksMaxPages === ""
  ) {
    alert("Please fill all the fields.");
    return;
  }

  if (!isNaN(currentPage) && !isNaN(booksMaxPages)) {
    currentPage = parseInt(currentPage);
    booksMaxPages = parseInt(booksMaxPages);

    if (currentPage <= booksMaxPages) {
      const newBook = {
        title: booksTitle,
        author: booksAuthor,
        maxPages: booksMaxPages,
        onPage: currentPage,
      };

      books.push(newBook);

      const listItem1 = document.createElement("li");
      listItem1.textContent = `${newBook.title} by ${newBook.author}`;
      unorderedList1.appendChild(listItem1);

      const listItem2 = document.createElement("li");

      if (newBook.onPage < newBook.maxPages) {
        listItem2.textContent = `You still need to read ${newBook.title} by ${newBook.author}.`;
        listItem2.style.color = "red";
      } else if (newBook.onPage === newBook.maxPages) {
        listItem2.textContent = `You already read ${newBook.title} by ${newBook.author}.`;
        listItem2.style.color = "green";
      }

      unorderedList2.appendChild(listItem2);

      const progressPercentage = Math.ceil(
        (newBook.onPage / newBook.maxPages) * 100
      );
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${newBook.title}</td>
          <td>${newBook.author}</td>
          <td>${newBook.maxPages}</td>
          <td>${newBook.onPage}</td>
          <td>
            <div class="myProgress">
              <div class="myBar" style="width: ${progressPercentage}%;">${progressPercentage}%</div>
            </div>
          </td>`;
      tbody.appendChild(row);
      document.querySelector("#booksTitle").value = "";
      document.querySelector("#booksAuthor").value = "";
      document.querySelector("#currentPage").value = "";
      document.querySelector("#booksMaxPages").value = "";
    } else {
      alert(
        "The current Page number can not be greater than max-number of Pages."
      );
    }
  } else {
    alert(
      "Please enter valid numbers for the current Page and for the Books Max Pages."
    );
  }
});
