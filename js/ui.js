export const renderBook=(books)=>{
    const c = document.getElementById('book-list');
    if (!books) {
        c.innerHTML = '<p class="text-danger">X Nessun libro disponibile</p>';
        return;
    }
    //layout delle bootrap card
    let cards = '<h3 class="mt-4 mb-3">Titoli corrispondenti alla ricerca</h3><div class="row row-cols-1 row-cols-md-3 g-3">';
    //ciclo su ogni ora disponibile
    for (let i = 0; i < books.length; i++) {
        //estraffo solo l orario dalla stringa ISO 8601
        cards += /*html*/`<div  class="col">
        <div class="card shadow-sm h-100 text-center">
            <div class="card-body">
                <h5 class="card-title">${books[i].title}</h5>
                <p class="card-text">Autori: ${   books[i].autori} </p>
                <p class="card-text">Anno: ${          books[i].year} </p>
                <p class="card-text">Language:${books[i].language}  </p>
            </div>
        </div>
    </div>`;
    
    }
    cards += '</div>';
    c.innerHTML = cards;
}
