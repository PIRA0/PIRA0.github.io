let credenziali = null;

function caricaCredenziali() {
  fetch('Login.json')
    .then(response => response.json())
    .then(data => {
      credenziali = data.users;
    })
    .catch(error => {
      console.error('Errore nel caricamento del file JSON:', error);
    });
}

function salvaDati() {
   const user = document.getElementById('user');
   const password = document.getElementById('Password');
   localStorage.setItem("user", user.value);
   localStorage.setItem("password", password.value);
}

function validaCredenziali(username, password) {
   if (!credenziali) {
      console.error('Credenziali non caricate!');
      return false;
   }

   for (let i = 0; i < credenziali.length; i++) {
      if (credenziali[i].username === username && credenziali[i].password === password) {
         return true;
      }
   }
   return false;
}

function apriShop() {
   const user = document.getElementById('user').value;
   const password = document.getElementById('Password').value;

   if (validaCredenziali(user, password)) {
      salvaDati();
      window.open("shop.html", "_self");
   } else {
      alert("Credenziali non valide!");
   }
}

window.onload = function() {
   caricaCredenziali();
}
