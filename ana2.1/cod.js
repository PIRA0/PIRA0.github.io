var tabella = document.getElementById('tabella_tutta'); 
var tbody = tabella.getElementsByTagName('tbody')[0]; 
var nColonne = tabella.getElementsByTagName('th').length; 
var arrayId = ["nome", "cognome", "indirizzo", "citta", "email", "cf"];

function addRiga() {
    var nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var cfRegex = /^[A-Za-z0-9]{16}$/;

    let conta = 0;
    var dati = [];
    
    // Raccogliamo i dati dai campi di input
    for (let i = 0; i < nColonne; i++) {
        let campo = document.getElementById(arrayId[i]);
        if (campo && campo.value !== "") { 
            dati.push(campo.value);  // Aggiungiamo il valore al vettore
            conta++;
        }
    }

    if (conta === 0) { 
        return;
    }

    // Validazioni
    if (!nomeRegex.test(dati[0])) {
        alert("Il nome non è valido.");
        return;
    }
    if (!nomeRegex.test(dati[1])) {
        alert("Il cognome non è valido.");
        return;
    }
    if (!nomeRegex.test(dati[2])) {
        alert("L'indirizzo non è valido.");
        return;
    }
    if (!nomeRegex.test(dati[3])) {
        alert("La città non è valida.");
        return;
    }
    if (!emailRegex.test(dati[4])) {
        alert("L'email non è valida.");
        return;
    }
    if (!cfRegex.test(dati[5])) {
        alert("Il codice fiscale non è valido.");
        return;
    }

    // Salviamo i dati nel localStorage come stringa separata da virgole
    localStorage.setItem('datiUtente', dati.join(','));

    // Reindirizziamo alla pagina di destinazione
    window.location.href = './pag.html';
}
