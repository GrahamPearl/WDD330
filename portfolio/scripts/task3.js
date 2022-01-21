/* Lesson 3 */
let fotos = document.getElementById("photo-container");
let newNode =
    '<div class="card">' +
    '<div class="text-center">' +
    '"<img src="./images/self.png" class="text-center"' +
    ' alt="Profile Photo"' +
    ' style="width: 250px; height: 300px"' +
    "/>" +
    "</div>" +
    '<div class="card-header">Student Details</div>' +
    '<div class="card-body">' +
    '<h5 class="card-title">Graham Pearl</h5>' +
    '<p class="card-text">1234</p>' +
    '<p class="card-text Barcode">*m1234*</p>' +
    '<a href="#" class="btn btn-primary">Add card to print list</a>' +
    "</div>" +
    '<div class="card-footer text-muted">Student Card Collection Printing</div>' +
    '</div>';

fotos.innerHTML = newNode + newNode