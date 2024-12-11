window.onload = function() {
    var dati = localStorage.getItem('datiUtente');
    if (dati) {
        var datiArray = dati.split(',');
        var tabella = document.getElementById('tabella_tutta'); 
        var tbody = tabella.getElementsByTagName('tbody')[0]; 
        

        var tr = document.createElement('tr');
        

        for (var i = 0; i < datiArray.length; i++) {
            var td = document.createElement('td');
            td.textContent = datiArray[i]; 
            tr.appendChild(td);
        }


        tbody.appendChild(tr);
    } else {
        alert("Nessun dato trovato nel localStorage.");
    }
};
