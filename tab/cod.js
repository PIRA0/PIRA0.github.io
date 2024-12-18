function apri(input) {
  let file = input.files[0];
  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
      let csvData = reader.result;
      let table = csvToTable(csvData);
      document.getElementById("contenuto").innerHTML = table;
  };
}


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
