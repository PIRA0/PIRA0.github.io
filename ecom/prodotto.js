
function aggiungiAlCarrello(id) {
    let carrello = JSON.parse(localStorage.getItem('cart')) || [];
    carrello.push(id);
    localStorage.setItem('cart', JSON.stringify(carrello));
}
function getId(){
    
}

fetch("prodotti.json")
    .then((response) => {
        if (!response.ok) {
            console.error("Errore caricamento");
            return;
        }
        return response.json();
    })
    .then((prodotti) => {
            let idpr=0;
            if(localStorage.getItem("idpr")!=null) idpr=parseInt(localStorage.getItem("idpr"));
            let img = document.getElementById("imgpr");
            img.src = prodotti[idpr].immagine;

            let nome = document.getElementById("tit");
            nome.innerHTML = prodotti[idpr].titolo;

            let descr = document.getElementById("descr");
            descr.innerHTML = prodotti[idpr].descrizione;
            
            let prezzo = document.getElementById("pr");
            prezzo.innerHTML = prodotti[idpr].prezzo;

            let atc = document.getElementById("atc");
            atc.setAttribute("onclick", "aggiungiAlCarrello(" + prodotti[idpr] + ")");
            
    })
    .catch((error) => {
        console.error("Errore nel caricamento del file JSON:", error);
    });

