fetch("prodotti.json")
    .then((response) => {
        if (!response.ok) {
            console.error("Errore caricamento");
            return;
        }
        return response.json();
    })
    .then((prodotti) => {
        let idpr = 0;
        if (localStorage.getItem("idpr") !== null) {
            idpr = parseInt(localStorage.getItem("idpr"));
        }

        let prodotto = prodotti[idpr];
        if (!prodotto) {
            console.error("Prodotto non trovato per id:", idpr);
            return;
        }

        let img = document.getElementById("imgpr");
        img.src = prodotto.immagine;
        img.alt = prodotto.titolo;

        let nome = document.getElementById("tit");
        nome.textContent = prodotto.titolo;

        let descr = document.getElementById("descr");
        descr.textContent = prodotto.descrizione;

        let prezzo = document.getElementById("pr");
        prezzo.textContent = prodotto.prezzo + " €";


        let atc = document.getElementById("atc");
        atc.addEventListener("click", () => {
            aggiungiAlCarrello(prodotto.id);
        });
    })
    .catch((error) => {
        console.error("Errore nel caricamento del file JSON:", error);
    });

function aggiungiAlCarrello(id) {
    let carrello = JSON.parse(localStorage.getItem("cart")) || [];
    carrello.push(id);
    localStorage.setItem("cart", JSON.stringify(carrello));
    console.log("Prodotto aggiunto al carrello:", id);
}

