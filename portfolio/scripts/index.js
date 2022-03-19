menuItems = {
    "titles": ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10"],
    "links": ["task1.html", "task2.html", "task3.html", "task4.html", "task5.html", "task6.html", "task7.html", "task8.html", "task9.html", "task10.html"]
}

teamItems = {
    "titles": ["Team 4", "Team 5", "Team 7", "Team 8", "Team 9", "Team 10", "Team 11", "Team 12"],
    "links": ["team4.html", "team5.html", "team7.html", "team8.html", "team9.html", "team10.html", "team11.html", "team12.html"]
}

function buildMenu(path, data) {
    let x = "";
    for (let item in data.titles) {
        x += '<li><a class="dropdown-item" href="' + path + data.links[item] + '">' + data.titles[item] + '</a></li>';
    }
    return x;
}

document.getElementById("#menuWeek").innerHTML = buildMenu('./portfolio/content/tasks/', menuItems)
document.getElementById("#menuTeam").innerHTML = buildMenu('./portfolio/content/teams/', teamItems)