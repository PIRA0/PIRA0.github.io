
fetch("prodotti.json")
    .then((response) => {
        if (!response.ok) {
            console.error("Errore caricamento");
            return;
        }
        return response.json();
    })
    .then((prodotti) => {
        let container = document.getElementById("elementi");
        prodotti.forEach((prodotto) => {
            let div = document.createElement("div");
            div.id = "prodotto";

            let img = document.createElement("img");
            img.src = prodotto.immagine;
            img.id = "img";
            div.append(img);

            let nome = document.createElement("a");
            nome.href="prodotto.html";
            nome.id = "titolo";
            nome.innerHTML = prodotto.titolo;
            nome.setAttribute("onclick","setId("+prodotto.id+")");
            div.append(nome);
            
            let prezzo = document.createElement("p");
            prezzo.id = "prezzo";
            prezzo.innerHTML = prodotto.prezzo;
            div.append(prezzo);

            let atc = document.createElement("button");
            atc.id = "atc";
            atc.setAttribute("onclick", "atc(" + prodotto.id + ")");
            atc.innerHTML = "<i class='fa-solid fa-cart-plus'></i> Aggiungi al carrello";
            div.appendChild(atc);

            container.appendChild(div);
        });
    })
    .catch((error) => {
        console.error("Errore nel caricamento del file JSON:", error);
    });

function atc(id) {
    let v = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : [];
    v.push(id);
    localStorage.setItem("cart", JSON.stringify(v));
}
function setId(id){
    localStorage.setItem("idpr", id);
}




