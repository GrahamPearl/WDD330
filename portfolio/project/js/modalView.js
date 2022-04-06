let modalGeneric = null;

function createCitationSection(title) {

}

function createModalGeneric(title) {
    modalGeneric = document.getElementById("Modal-View");

    modalGeneric.setAttribute("tabindex", "-1");
    modalGeneric.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" > ` + title + ` </h5> 
                <button type="button" class="btn-close" data-bs-dismiss="modal" > </button> 
            </div> 
            <div class="modal-body" >
                <p><input id="searchFor" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" required /></p> 
                <p class="text-secondary"><small></small></p>
            </div> 
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Cancel</button> 
                <button type="button" class="btn btn-primary">Search</button> 
            </div> 
        </div> 
    </div>`;
}