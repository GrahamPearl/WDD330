"use strict";

var citation_selected = "None";

/*
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(function(registration) {
            console.log(
                "ServiceWorker registration successful with scope: ",
                registration.scope
            );
        })
        .catch(function(err) {
            console.log("ServiceWorker registration failed: ", err);
        });
}
*/

function rowFormatter(index, row) {
    try {
        try {
            var html = [];
            $.each(row, function(key, value) {
                html.push("<p><b>" + key + ":</b> " + value + "</p>");
            });
            return html.join("");
        } catch (err) {
            console.error("Error rowFormatter: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException rowFormatter: ");
    }
}

function buildCitationForm(title) {
    let citation_form = "";
    try {
        try {
            const citation_book = `
    <div class="col">
        <div class="input-group">
            <input id="Book-Author" type="text" class="form-control mb-3" placeholder="Author" aria-label="Author" />
        </div>
        <div class="input-group">
            <input id="Book-Title" type="text" class="form-control mb-3" placeholder="Title" aria-label="Title" />
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <input id="Book-City" type="text" class="form-control mb-3" placeholder="City" aria-label="City" />
        </div>
        <div class="input-group">
            <input id="Book-State" type="text" class="form-control mb-3" placeholder="State/Country" aria-label="State/Country" />
            <input id="Book-Year" type="date" class="form-control mb-3" placeholder="Year" aria-label="Year" minViewMode:"year" />
        </div>
    </div>`;
            const citation_journal = `
    <div class="col">
        <div class="input-group">
            <input id="Journal-Author" type="text" class="form-control mb-3" placeholder="Author" aria-label="Author" />
        </div>
        <div class="input-group">
            <input id="Journal-Article-Title" type="text" class="form-control mb-3" placeholder="Article-Title" aria-label="Article-Title" />
        </div>
        <div class="input-group">
            <input id="Journal-Title" type="text" class="form-control mb-3" placeholder="Journal-Title" aria-label="Journal-Title" />
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <input id="Journal-Source" type="text" class="form-control mb-3" placeholder="Retrieved from" aria-label="Retrieved from" />
        </div>
        <div class="input-group">
            <input id="Journal-State" type="text" class="form-control mb-3" placeholder="State/Country" aria-label="State/Country" />
            <input id="Journal-Year" type="date" class="form-control mb-3" placeholder="Year" aria-label="Year" />
        </div>
        <div class="input-group">
            <input id="Journal-Volume" type="text" class="form-control mb-3" placeholder="Volume" aria-label="Volume" />
            <input id="Journal-Pages" type="text" class="form-control mb-3" placeholder="Pages" aria-label="Pages" />
        </div>
    </div>`;
            const citation_movie = `
    <div class="col">
        <div class="input-group">
            <input id="Movie-Producer" type="text" class="form-control mb-3" placeholder="Producer" aria-label="Producer" />
        </div>
        <div class="input-group">
            <input id="Movie-Director" type="text" class="form-control mb-3" placeholder="Writer/Director" aria-label="Writer/Director" />
        </div>
        <div class="input-group">
            <input id="Movie-Title" type="text" class="form-control mb-3" placeholder="Title" aria-label="Title" />
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <input id="Movie-Publisher" type="text" class="form-control mb-3" placeholder="Publisher" aria-label="Publisher" />
        </div>
        <div class="input-group">
            <input id="Movie-State" type="text" class="form-control mb-3" placeholder="State/Country" aria-label="State/Country" />
            <input id="Movie-Year" type="date" class="form-control mb-3" placeholder="Year" aria-label="Year" />
        </div>
    </div>`;

            const citation_website = `
    <div class="col">
        <div class="input-group">
            <input id="Website-Author" type="text" class="form-control mb-3" placeholder="Author" aria-label="Author" />
        </div>
        <div class="input-group">
            <input id="Wesite-URL" type="url" class="form-control mb-3" placeholder="Website-URL" aria-label="Website-URL" />
        </div>
        <div class="input-group">
            <input id="Website-Title" type="text" class="form-control mb-3" placeholder="Title" aria-label="Title" />
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <input id="Website-Publisher" type="text" class="form-control mb-3" placeholder="Publisher" aria-label="Publisher" />
        </div>
        <div class="input-group">
            <label for="Website-Created" class="form-control"">Date Created</label>            
            <input  id="Website-Created" class="form-control" type="date"  placeholder="Date Created" aria-label="Date Created"/>
        </div>
        <div class="input-group">
            <label for="Website-Accessed" class="form-control">Date Accessed</label>
            <input  id="Website-Accessed" class="form-control" type="date" placeholder="Date Accessed" aria-label="Date Accessed"/>
        </div>
    </div>`;

            if (title == "Book") citation_form = citation_book;
            if (title == "Journal") citation_form = citation_journal;
            if (title == "Movie") citation_form = citation_movie;
            if (title == "Website") citation_form = citation_website;
        } catch (err) {
            console.error("Error buildCitationForm: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException buildCitationForm: ");
    }

    return citation_form;
}

function toggleElement(elementID, mode = null) {
    try {
        try {
            let item = document.getElementById(elementID);
            if (item != null)
                if (mode != null) item.style.display = mode;
                else if (item.style.display != "none") item.style.display = "none";
            else item.style.display = "block";
        } catch (err) {
            console.error("Error toggleElement: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException toggleElement: ");
    }
}

function toggleElementCitation(elementID, mode = null) {
    try {
        try {
            let item = document.getElementById(elementID);
            if (item != null)
                if (mode != null) item.style.display = mode;
                else if (item.style.display != "none") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }

            let citation_content = document.getElementById("citation-content");
            citation_content.innerHTML = buildCitationForm(citation_selected);
        } catch (err) {
            console.error("Error toggleElementCitation: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException toggleElementCitation: ");
    }
}

$("#table-search-results").DataTable({
    url: "",
    pagination: true,
    spagingType: "simple",
    search: false,
    checkboxEnabled: true,
    columns: [{
            field: "publishedDate",
            title: "Date Published",
        },
        {
            field: "title",
            title: "Title",
        },
    ],
});

function updateSearchTable(searchFor) {
    try {
        try {
            searchFor = searchFor.split(" ").join("+");
            console.log("Loading Book [" + searchFor + "] Information");
            fetch(
                    "https://www.googleapis.com/books/v1/volumes?q=inauthor+" +
                    searchFor +
                    "&maxResults=40&startIndex=" +
                    currentPage
                )
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
                            publishedDate: obj.volumeInfo.publishedDate,
                            title: obj.volumeInfo.title,
                        };
                        books.push(book);
                    }
                    console.table(books);

                    $("#table-search-results").bootstrapTable("load", books);
                    $(document).ready(function() {
                        $("#table-search-results").DataTable();
                    });

                    console.log("Data loaded");
                });
        } catch (err) {
            console.error("Error addModalViews: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException addModalViews: ");
    }
}

function showAlert() {
    try {
        try {
            let toFind = document.getElementById("modal-searchFor").value;
            toFind = toFind.split(" ").join("+");

            updateSearchTable(toFind);
        } catch (err) {
            console.error("Error addModalViews: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException addModalViews: ");
    }
}

var modalSearch = null;

function addModalViews(ModalItem, ModalView) {
    try {
        try {
            if (document.getElementById(ModalItem) != null) {
                if (document.getElementById(ModalView) != null) {
                    modalSearch = new bootstrap.Modal(
                        document.getElementById(ModalView), {}
                    );
                } else console.log("Unable to find Element ID: " + ModalView);
            } else console.log("Unable to find Element ID: " + ModalItem);
        } catch (err) {
            console.error("Error addModalViews: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException addModalViews: ");
    }
}

function addNavElements(navList) {
    try {
        try {
            if (document.getElementById(navList) != null) {
                console.log("Loading Links");

                let nav = document.getElementById("navList");
                const nav_items = {
                    Book: "citation",
                    Journal: "citation",
                    Movie: "citation",
                    Website: "citation",
                };

                if (nav == null) console.log("Unable to find Element ID: navList");
                if (nav != null)
                    for (const [key, value] of Object.entries(nav_items)) {
                        console.log(key, " = ", value);
                        let li = document.createElement("li");
                        let link = document.createElement("a");
                        link.className = "dropdown-item btn-lg btn-primary";
                        link.innerText = key;
                        link.href = "#" + value;
                        link.setAttribute("data-bs-toggle", "modal");
                        link.setAttribute("data-bs-target", link.href);
                        li.addEventListener(
                            "click",
                            function() {
                                if (citation_selected != link.innerText) {
                                    citation_selected = link.innerText;
                                    toggleElementCitation(value, "block");
                                } else toggleElement(value);
                                citation_selected = link.innerText;
                            },
                            false
                        );
                        li.appendChild(link);
                        nav.appendChild(li);
                    }
                console.log("Links Loaded");
            }
        } catch (err) {
            console.error("Error addNavElements: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException addNavElements: ");
    }
}

function initialHideToggleElements() {
    try {
        try {
            const toggle_items = {
                Book: "citation",
                Journal: "citation",
                Movie: "citation",
                Website: "citation",
                listCitation: "citation_list",
                listAPAFormat: "apa6formats",
                listBlogPosts: "blogposts",
            };

            if (toggle_items != undefined) {
                console.log("Setting variables toggle None: toggle_items");
                for (const [key, value] of Object.entries(toggle_items)) {
                    toggleElement(value, "none");
                }
            } else {
                console.log("Undefined variable: toggle_items");
            }
        } catch (err) {
            console.error("Error initialHideToggleElements: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException initialHideToggleElements: ");
    }
}

function submitButtonEventHandler() {
    try {
        try {
            if (document.getElementById("submitBtn") != null) {
                let submitBtn = document.getElementById("submitBtn");
                submitBtn.addEventListener("click", function(evt) {
                    evt.preventDefault();
                    window.location.replace("");
                    return false;
                });
            }
        } catch (err) {
            console.error("Error rowFormatter: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException rowFormatter: ");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    try {
        try {
            submitButtonEventHandler();
            addNavElements("navList");
            addModalViews("Modal-View-URL", "Modal-View-Search");
            initialHideToggleElements();
        } catch (err) {
            console.error("Error DOMContentLoaded: " + err);
        }
    } catch (DOMException) {
        console.error("DOMException: DOMContentLoaded");
    } finally {
        console.log("DOMContentLoaded : Construction complete");
    }
});