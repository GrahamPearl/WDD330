menuItems = {
    "titles": ["Week 1", "Week 2", "Week 3", "Week 4", "Team 4", "Week 5", "Team 5", "Week 6", "Team 7"],
    "links": ["task1.html", "task2.html", "task3.html", "task4.html", "team4.html", "task5.html", "team5.html", "task6.html", "team7.html"]
}

function buildMenu() {
    let x = "";
    for (let item in menuItems.titles) {
        x += '<li><a class="dropdown-item" href="./portfolio/' + menuItems.links[item] + '">' + menuItems.titles[item] + '</a></li>';
    }
    return x;
}

document.getElementById("#menu").innerHTML = buildMenu()