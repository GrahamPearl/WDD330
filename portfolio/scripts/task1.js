/* Lesson 2 */
let nodeName = document.getElementById("name");
nodeName.innerHTML = "Graham Pearl";



let nodes = document.getElementsByClassName("card-img-top");
for (let i = 0; i < nodes.length; i++) {
    nodes[i].setAttribute("src", "images/note.jpg");
}