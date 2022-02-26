/* Lesson 8 */
stylesToAdd = [
    "transform: scale(1.15, 1.15);",
    "transform: scale(0.85, 0.85);",
    "transform: translateX(50px);",
    "transform: translateX(-50px);",
    "transform: rotateZ(30deg);",
    "transform: rotateY(360deg);",
    "transform: skew(30deg);",
    "transform-origin: 35px bottom; transform: rotate(90deg);",
    "transform-origin:  5px left; transform: rotate(90deg);"
];

let container = document.getElementById("demo");

for (i = 1; i <= 8; i++) {
    let item = document.createElement("div");
    let text = document.createTextNode("Hover Over");
    item.appendChild(text);
    item.classList.add("card");

    item.onmouseover = function() {
        this.style.cssText = 'color: #FFFFFF;';
    };

    item.style.cssText = stylesToAdd[i];

    container.appendChild(item);
}