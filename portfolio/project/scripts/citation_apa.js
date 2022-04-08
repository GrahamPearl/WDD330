function renderOneCitation(data) {
    const citation = document.createElement("div");
    citation.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data.type}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data.apa6}</h6>
          <p class="card-text">${data.link}</p>
          <a href="#${data.link}" class="card-link">Card link</a>          
        </div>
      </div>`;
    return citation;
}

function renderList(parent, citations) {
    citations.forEach((citation) => {
        parent.appendChild(renderOneCitation(citation));
    });
}

async function getAllCitations(citations) {


    if (citations != undefined) {
        if (typeof citations === 'object') renderList(parentElement, citations)
        else
            parentElement.innerHTML = "<h3>Citations are string</h3><h4>" + citations + "</h4>";
    } else parentElement.innerHTML = "<h3>Undefined Object</h3>";

}

let parentElement = document.getElementById("citations-cards");

let text = localStorage.citations; //.replace(',', ' ') 
if (text != "") {
    text = "[" + text.slice(0, -1) + "]";
    console.log("localStorage: before" + localStorage.citations);
    console.log("localStorage:  after" + text);
    text = text.replaceAll('"','')
    let cite = JSON.parse(text);
    //getAllCitations(localStorage.citations);
    //getAllCitations(text);
    getAllCitations(cite);
    //
}