function LinkFormatter(value, row, index) {
    return '<a class="btn btn-primary" href="' + row.link + '">Link</a>';
}

function PhotoFormatter(value, row, index) {
    return '<img src="' + row.photo + '" width="40px" class="rounded-circle">';
}

function ActionFormatter(value, row, index) {
    return `<div class="btn-group" role="group" aria-label="Basic example">
    <a class="btn btn-primary"><i class="fa-solid fa-scissors"></i></a>
    <a class="btn btn-primary"><i class="fa-solid fa-pen"></i></a>
    <a class="btn btn-primary"><i class="fa-solid fa-trash"></i></a>                                                
</div>`;
}