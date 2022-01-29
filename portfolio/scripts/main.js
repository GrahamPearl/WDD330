// toggle menu in small view
const menuItems =
    '<div class="container-fluid">' +
    ' <a class="navbar-brand" href="#">Navbar</a>' +
    '  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '    <span class="navbar-toggler-icon"></span>' +
    '  </button>' +
    '  <div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '    <ul class="navbar-nav me-auto mb-2 mb-lg-0">' +
    '      <li class="nav-item">' +
    '        <a class="nav-link active" aria-current="page" href="#">Home</a>' +
    '      </li>' +
    '      <li class="nav-item">' +
    '        <a class="nav-link" href="#">Link</a>' +
    '      </li>' +
    '      <li class="nav-item dropdown">' +
    '        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tasks' +
    '        </a>' +
    '        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '          <li><a class="dropdown-item" href="#">1</a></li>' +
    '          <li><a class="dropdown-item" href="#">2</a></li>' +
    '          <li><a class="dropdown-item" href="#">3</a></li>' +
    '          <li><hr class="dropdown-divider"></li>' +
    '          <li><a class="dropdown-item" href="#">Team 3</a></li>' +
    '        </ul>' +
    '      </li>' +
    '    </ul>' +
    '    <form class="d-flex">' +
    '      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">' +
    '      <button class="btn btn-outline-success" type="submit">Search</button>' +
    '    </form>' +
    '  </div>' +
    '</div>'

//document.getElementById("#menu").innerHTML = menuItems


//<document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);
// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();