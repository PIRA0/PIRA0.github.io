let credenziali = null;  // Variabile per memorizzare i dati dopo il fetch

// Funzione per caricare il file JSON tramite fetch
function caricaCredenziali() {
  fetch('Login.json')  // Modifica il percorso se il file JSON si trova altrove
    .then(response => response.json())  // Converte la risposta in formato JSON
    .then(data => {
      credenziali = data.users;  // Salva le credenziali
    })
    .catch(error => {
      console.error('Errore nel caricamento del file JSON:', error);
    });
}

// Funzione per salvare i dati nell'LocalStorage
function salvaDati() {
   const user = document.getElementById('user');
   const password = document.getElementById('Password');
   localStorage.setItem("user", user.value);
   localStorage.setItem("password", password.value);
}

// Funzione per validare le credenziali
function validaCredenziali(username, password) {
   // Controlliamo se le credenziali sono state caricate
   if (!credenziali) {
      console.error('Credenziali non caricate!');
      return false;
   }

   // Verifica delle credenziali con quelle nel file JSON
   for (let i = 0; i < credenziali.length; i++) {
      if (credenziali[i].username === username && credenziali[i].password === password) {
         return true;  // Credenziali valide
      }
   }
   return false;  // Credenziali non valide
}

// Funzione per aprire lo shop
function apriShop() {
   const user = document.getElementById('user').value;
   const password = document.getElementById('Password').value;

   // Verifica se le credenziali sono valide
   if (validaCredenziali(user, password)) {
      salvaDati();
      window.open("shop.html", "_self");
   } else {
      alert("Credenziali non valide!");
   }
}

// Carica le credenziali al caricamento della pagina
window.onload = function() {
   caricaCredenziali();
}
