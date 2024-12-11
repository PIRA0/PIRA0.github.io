window.onload = function() {
    var dati = localStorage.getItem('datiUtente');  // Recuperiamo la stringa salvata
    if (dati) {
        var datiArray = dati.split(',');  // Separiamo la stringa in un array
        var tabella = document.getElementById('tabella_tutta'); 
        var tbody = tabella.getElementsByTagName('tbody')[0]; 
        
        // Creiamo una nuova riga nella tabella
        var tr = document.createElement('tr');
        
        // Usando un ciclo for per aggiungere i dati alle celle della riga
        for (var i = 0; i < datiArray.length; i++) {
            var td = document.createElement('td');
            td.textContent = datiArray[i];  // Impostiamo il valore della cella
            tr.appendChild(td);
        }

        // Aggiungiamo la riga al corpo della tabella
        tbody.appendChild(tr);
    } else {
        alert("Nessun dato trovato nel localStorage.");
    }
};
