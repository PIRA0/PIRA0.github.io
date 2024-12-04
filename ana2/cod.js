var tabella = document.getElementById('tabella_tutta'); 
var tbody = tabella.getElementsByTagName('tbody')[0]; 
var nColonne = tabella.getElementsByTagName('th').length; 
var arrayId = ["nome", "cognome", "indirizzo", "citta", "email", "cf"];

function addRiga() {

    var nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var cfRegex = /^[A-Za-z0-9]{16}$/;

    let conta = 0;
    for (let i = 0; i < nColonne; i++) {
        let campo = document.getElementById(arrayId[i]);
        if (campo && campo.value !== "") { 
            conta++;
        }
    }
    
    if (conta === 0) { 
        return;
    }


    if (!nomeRegex.test(nome)) {
        alert("Il nome non è valido.");
        return;
    }
    if (!nomeRegex.test(cognome)) {
        alert("Il cognome non è valido.");
        return;
    }
    if (!nomeRegex.test(indirizzo)) {
        alert("L'indirizzo non è valido.");
        return;
}
    if (!nomeRegex.test(citta)) {
        alert("La città non è valida.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("L'email non è valida.");
        return;
            }
    if (!cfRegex.test(cf)) {
        alert("Il codice fiscale non è valido.");
        return;
    }


    var tr = document.createElement('tr'); 
    for (let i = 0; i < nColonne; i++) {
        let td = document.createElement('td');
        let elementoDom = document.getElementById(arrayId[i]);
        let valore;

        if (elementoDom) {
            valore = elementoDom.value; 
        } else {
            valore = "N/A"; 
        }

        td.textContent = valore; 
        tr.appendChild(td);
    }
    tbody.appendChild(tr); 


    //pulisco campi id
    for (let i=0; i < nColonne; i++){
        document.getElementById(arrayId[i]).value= '';
    }
}