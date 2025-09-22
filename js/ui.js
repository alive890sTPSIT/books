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
        const book = books[i];
        cards += /*html*/`<div  class="col">
        <div class="card shadow-sm h-100 text-center">
            <div class="card-body">
                <h5 class="card-title">${           book.title}</h5>
                <p class="card-text">Autori: ${     book.autori.join(', ')} </p>
            <p class="card-text">Anno: ${           book.year} </p>
                <p class="card-text">Language: [${    book.language.join(', ')}]  </p>
            </div>
        </div>
    </div>`;
    
    }
    cards += '</div>';
    c.innerHTML = cards;
}
