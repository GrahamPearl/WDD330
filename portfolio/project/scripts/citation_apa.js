$("#table-books").bootstrapTable({
    url: "",
    pagination: true,
    search: false,
    columns: [{
            field: "title",
            title: "Title",
        },
        {
            field: "publishedDate",
            title: "Date Published",
        },
    ],
});

function updateBookTable(searchFor) {
    searchFor = searchFor.split(' ').join('+');
    console.log("Loading Book [" + searchFor + "] Information");
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchFor)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then((json) => {
            let data = json.items;
            let books = [];
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var book = {
                    title: obj.volumeInfo.title,
                    publishedDate: obj.volumeInfo.publishedDate,
                };
                books.push(book);
            }
            console.table(books);

            $('#table-books').bootstrapTable("load", books);
            console.log("Data loaded");
        });
}