// team Task 8
const urlBasePath = "http https://swapi.dev/api/people/";

export default class People {
    getAllPeople() {
        return peopleList;
    }

    getPersonByID(personID) {
        return this.getAllPeople().find((people) => people.id === personID);
    }

    showPeopleList() {
        this.parentElement.innerHTML = "";

        this.renderPeopleList(this.parentElement, this.getAllPeople());
        this.addPeopleListener();
        this.backButton.classList.add("hidden");
        this.comments.showCommentsList();
    }

    renderPeopleList(parent, people) {
        people.forEach((person) => {
            parent.appendChild(renderOnePerson(person));
        });
    }

    showOnePerson(personID) {
        const person = this.getHikeByName(personID);
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

    renderOnePerson(person) {
        const item = document.createElement('li');
        item.innerHTML = `

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <p class="card-text">${person.skin_color}, ${person.hair_color}, ${person.gender}</p>
                <a href="#" class="btn btn-light">More Details</a>
            </div>
        </div>
        `;

        return item;
    }
}