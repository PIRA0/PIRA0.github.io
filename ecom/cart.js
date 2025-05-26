


fetch("prodotti.json")
        .then((response)=> {
            if(!response.ok){
                console.error("Errore caricamento");
                return;
            }
            return response.json();
        })
        .then((prodotti) => {
            let cart=JSON.parse(localStorage.getItem("cart")) || [];
            let container=document.getElementById("prodotti");
            console.log(cart.length);
            for(let i=0; i<cart.length; i++){
                let div=document.createElement("div");
                div.id="prodotto";
                let img=document.createElement("img");
                img.id="img";
                img.src=prodotti[i].immagine;
                div.appendChild(img);
                let tit=document.createElement("h3");
                tit.id="tit";
                tit.innerHTML=prodotti[i].titolo;
                div.appendChild(tit);
                let pr=document.createElement("h3");
                pr.id="pr";
                pr.innerHTML=prodotti[i].prezzo;
                div.appendChild(pr);
                container.appendChild(div);
            }
})

