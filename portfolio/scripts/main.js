// toggle menu in small view
const menuItems =
    '<li><a id="toggleMenu">&equiv;</a></li>' +
    '<li><a href="../index.html">Home</a></li>' +
    '<li><a href="task2.html">Lesson 2</a></li>' +
    '<li><a href="task3.html" class="active">Lesson 3</a></li>' +
    '<li><a href="task4.html">Lesson 4</a></li>' +
    '<li><a href="task5.html">Lesson 5</a></li>' +
    '<li><a href="task6.html">Lesson 6</a></li>"'


const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
    document.querySelector("#menu").innerHTML = menuItems
}


//<document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);
// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const generateLinks = () => {

    let itemU = document.createElement('li');
    let itemA = document.createElement('a');
    itemA.textContent = element.linkFor;
    itemA.setAttribute('href', element.linkURL);
    itemU.appendChild(itemA);

    document.querySelector('#menu').appendChild(itemU);
}