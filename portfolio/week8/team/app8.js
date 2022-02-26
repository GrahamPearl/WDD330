// team Task 8
let backButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let parentElement = document.getElementById("people");

function renderOneCharacter(data) {
    const character = document.createElement("div");
    character.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data.height}</h6>
          <p class="card-text">${data.birth_year}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;
    return character;
}

function renderList(parent, people) {
    people.forEach((person) => {
        //console.log(person);

        parentElement.appendChild(renderOneCharacter(person));
    });
}

async function getAllPeople(urlSource) {
    const list = fetch(urlSource);

    list
        .then((response) => response.json())
        .then((data) => {
            //console.table(data);

            if (data.results != undefined) {
                renderList(parentElement, data.results);
            }

            if (data.previous != undefined) {
                backButton.onclick = function() {
                    let prevURL = data.previous;
                    parentElement.innerHTML = "";
                    getAllPeople(prevURL)
                };
            }
            if (data.next != undefined) {
                nextButton.onclick = function() {
                    let nextURL = data.next;
                    parentElement.innerHTML = "";
                    getAllPeople(nextURL)
                };
            }
        });
}

let urlBasePath = "https://swapi.dev/api/people/";

getAllPeople(urlBasePath);