fetch("prodotti.json")
  .then((response) => {
    if (!response.ok) {
      console.error("Errore caricamento");
      return;
    }
    return response.json();
  })
  .then((prodotti) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("prodotti");
    container.innerHTML = "";
    cart.forEach((id) => {
      let prodotto = prodotti.find(p => p.id === id);
      if (!prodotto) return;


      let div = document.createElement("div");
      div.className = "prodotto";

      let minidiv = document.createElement("div");
      minidiv.className = "titpr";

      let img = document.createElement("img");
      img.className = "img";
      img.src = prodotto.immagine;
      img.alt = prodotto.titolo;
      div.appendChild(img);

      let tit = document.createElement("h3");
      tit.className = "tit";
      tit.textContent = prodotto.titolo;
      minidiv.appendChild(tit);

      let pr = document.createElement("h3");
      pr.className = "pr";
      pr.textContent = `${prodotto.prezzo} €`;
      minidiv.appendChild(pr);

      div.appendChild(minidiv);

      let desc = document.createElement("p");
      desc.className = "desc";
      desc.textContent = prodotto.descrizione;
      div.appendChild(desc);

      container.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Errore nel caricamento dei dati:", error);
  });

function generaPDF() {
    const { jsPDF } = window.jspdf;  // Usa la libreria jsPDF

    // Recupera gli ID dei prodotti nel carrello dal localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Il carrello è vuoto!");
        return;
    }

    // Carica i dati da prodotti.json
    fetch('prodotti.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel caricamento di prodotti.json");
            }
            return response.json();
        })
        .then(prodotti => {
            const pdf = new jsPDF();  // Crea un nuovo documento PDF
            let y = 10;  // Posizione verticale iniziale
            pdf.setFont("Arial", "normal", 12);  // Imposta il font

            // Aggiungi il titolo al PDF
            pdf.text("Scontrino Acquisti", 10, y);
            y += 10;

            let total = 0;

            // Aggiungi i prodotti al PDF
            cart.forEach(id => {
                const prodotto = prodotti.find(p => p.id === id);  // Trova il prodotto corrispondente
                if (prodotto) {
                    pdf.text(prodotto.titolo, 10, y);  // Stampa il titolo
                    pdf.text(`€ ${prodotto.prezzo.toFixed(2)}`, 120, y);  // Stampa il prezzo
                    y += 10;
                    total += prodotto.prezzo;  // Aggiungi il prezzo al totale
                } else {
                    console.warn(`Prodotto con ID ${id} non trovato!`);
                }
            });

            // Aggiungi il totale finale al PDF
            y += 10;
            pdf.text(`Totale: € ${total.toFixed(2)}`, 10, y);

            // Salva il PDF
            pdf.save("scontrino.pdf");
        })
        .catch(error => {
            console.error("Errore nel caricamento dei prodotti:", error);
        });
}

