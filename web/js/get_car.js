
var db = firebase.firestore();
var marke = document.getElementById("marke").value;
var modell = document.getElementById("modell").value;
var kraftstoff = document.getElementById("kraftstoff").value;
var schaltung = document.getElementById("schaltung").value;
var tueren = document.getElementById("tueren").value;
var klima = document.getElementById("klima").value;
var navigationsgeraet = document.getElementById("navigationsgeraet").value;
var plaetze = document.getElementById("plaetze").value;
var raucherwagen = document.getElementById("raucherwagen").value;
var stellplatznummer = document.getElementById("stellplatznummer").value;

var cars = []
function addUserTableRow(doc) {
  //Wenn der DB-Eintrag users existiert
  db.collection("cars").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
          //schreiben alle User mit ihren Daten in die Konsole
          console.log(doc.id, " => ", doc.data());
          //Rufe Funktion addUserTableRow auf

          if (typeof(Storage) !== "undefined") {
            if (sessionStorage.marke) {
              sessionStorage.marke = Number(sessionStorage.clickcount)+1;
            } else {
              sessionStorage.clickcount = 1;
            }
            document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
          } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
          }

          }
      });
  });
}
