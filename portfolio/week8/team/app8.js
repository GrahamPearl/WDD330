// team Task 8
export default class People {
    people = [];

    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.backButton = this.buildPrevfButton();
        this.nextButton = this.buildNextfButton();        
    }

    getPersonByID(personID) {
        return this.getAllPeople().find((people) => people.id === personID);
    }

    showPeopleList() {
        this.parentElement.innerHTML = "";

        this.renderPeopleList(this.parentElement, this.getAllPeople());
        this.addPeopleListener();
        this.nextButton.classList.add("hidden");
        this.backButton.classList.add("hidden");
        //this.comments.showCommentsList();
    }

    renderOnePerson(person) {
        const item = document.createElement('div');

        item.innerHTML = `

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <p class="card-text">${person.skin_color}, ${person.hair_color}, ${person.gender}</p>
                <a href="#" class="btn btn-light">More Details</a>
            </div>
        </div>
        `;

        return item;
    }


    renderPeopleList(parent, people) {
        people.forEach((person) => {
            parent.appendChild(this.renderOnePerson(person));
        });
    }

    showOnePerson(personID) {
        const person = this.getPersonByID(personID);
        this.parentElement.innerHTML = "";
        this.parentElement.appendChild(this.renderOnePerson(person));
        this.backButton.classList.remove("hidden");
    }

    addPeopleListener() {
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach((child) => {
            child.addEventListener("touchend", (e) => {
                this.showOnePerson(e.currentTarget.dataset.id);
            });
        });
    }

    buildPrevfButton() {
        const backButton = document.getElementById("prev");
        backButton.addEventListener("touchend", () => {
            this.showPeopleList();
        });
        backButton.addEventListener("onclick", () => {
            alert('Clicked: Prev');
            this.showPeopleList();
        });

        backButton.classList.add("hidden");
        this.parentElement.before(backButton);
        return backButton;
    }

    buildNextfButton() {
        const nextButton = document.getElementById("next");
        nextButton.addEventListener("touchend", () => {
            this.showPeopleList();
        });

        nextButton.addEventListener("onclick", () => {
            alert('Clicked: Next');
            this.showPeopleList();
        });

        nextButton.classList.add("hidden");
        this.parentElement.before(nextButton);
        return nextButton;
    }

    getAllPeople() {
        const list =
            fetch(urlBasePath);

        list.then(response => response.json())
            .then(data => {
                this.renderPeopleList(this.parentElement, data.results);
            })

        return [];
    }

}


const urlBasePath = "https://swapi.dev/api/people/";

const starwars = new People('people');
window.addEventListener('load', () => {
    starwars.showPeopleList();
});