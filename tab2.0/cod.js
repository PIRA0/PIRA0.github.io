function apri(input) {
    let file = input.files[0];
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
        let csvData = reader.result;
        let table = csvToTable(csvData);
        document.getElementById("contenuto").innerHTML = table;
  
        // Creazione del grafico dopo aver caricato la tabella
        let chartData = extractChartData(csvData);
        createChart(chartData.labels, chartData.values);
    };
  }
  
  // Funzione per convertire CSV in una tabella HTML
  function csvToTable(csv) {
    let lines = csv.split("\n");
    let table = "<table>";
    
    let headers = lines[0].split(",");
    table += "<tr>";
    headers.forEach(header => {
        table += "<th>" + header.trim() + "</th>";
    });
    table += "</tr>";
  
    for (let i = 1; i < lines.length; i++) {
        let cells = lines[i].split(",");
        if (cells.length > 1) {
            table += "<tr>";
            cells.forEach(cell => {
                table += "<td>" + cell.trim() + "</td>";
            });
            table += "</tr>";
        }
    }
  
    table += "</table>";
    return table;
  }
  
  // Funzione per estrarre i dati per il grafico dal CSV
  function extractChartData(csv) {
    let lines = csv.split("\n");
    let labels = [];
    let values = [];
  
    for (let i = 1; i < lines.length; i++) {
        let cells = lines[i].split(",");
        if (cells.length > 1) {
            labels.push(cells[0].trim()); // Aggiunge la prima colonna come etichetta
            values.push(parseFloat(cells[1].trim())); // Aggiunge il valore della seconda colonna
        }
    }
  
    return { labels, values };
  }
  
  // Funzione per creare il grafico con Chart.js
  function createChart(labels, values) {
    // Creiamo un nuovo canvas per il grafico
    let ctx = document.createElement('canvas');
    document.getElementById("grafico").appendChild(ctx);
  
    new Chart(ctx, {
        type: 'bar', // Tipo di grafico: barre
        data: {
            labels: labels,
            datasets: [{
                label: 'Valori del CSV',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
  