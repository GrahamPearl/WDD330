/* Lesson 1 */
let nodeName = document.getElementById('name')
nodeName.innerHTML = 'Graham Pearl'

function setNodeImages(imagefile) {
    let nodes = document.getElementsByClassName('card-img-top')
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].setAttribute('src', imagefile)
    }
}

function showAlert() {
    alert('Clicked')
}

function setNodeAction(links) {
    let nodes = document.getElementsByClassName('card-body')
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('onhover', showAlert())
    }
}

setNodeImages('./images/note.jpg')