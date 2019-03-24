
//Neues Auto hinzufügen
function addCar(){

  var idcounter = "0";
  var db = firebase.firestore();
  var carRef = db.collection("cars");
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


  db.collection("cars").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        idcounter++;

      });

      // Auto in DB anlegen..
      var id = idcounter.toString();
      carRef.doc(id).set({
      carid: idcounter,
      rentalid: "none";
      marke: marke,
      modell: modell,
      kraftstoff: kraftstoff,
      schaltung: schaltung,
      tueren: tueren,
      klima: klima,
      navigationsgeraet:navigationsgeraet,
      plaetze: plaetze,
      raucherwagen: raucherwagen,
      stellplatznummer: stellplatznummer});

      location.replace('admin_carpool_overview.html');

  });



}

          var rIndex,
               table = document.getElementById("table");

           // check the empty input
           function checkEmptyInput()
           {
               var isEmpty = false,
                marke = document.getElementById("marke").value;
                modell = document.getElementById("modell").value;
                kraftstoff = document.getElementById("kraftstoff").value;
                schaltung = document.getElementById("schaltung").value;
                tueren = document.getElementById("tueren").value;
                klima = document.getElementById("klima").value;
                navigationsgeraet = document.getElementById("navigationsgeraet").value;
                plaetze = document.getElementById("plaetze").value;
                raucherwagen = document.getElementById("raucherwagen").value;
                stellplatznummer = document.getElementById("stellplatznummer").value;

               if(marke === ""){
                   alert("Bitte gib für den Auftrag einen Titel ein!");
                   isEmpty = true;
               }
               else if(modell === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(krafstoff === ""){
                   alert("Bitte füge deinem Auftrag eine kurze Beschreibung hinzu!");
                   isEmpty = true;
               }
               else if(schaltung === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(tueren === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(klima === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(navigationsgeraet === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(plaetze === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(raucherwagen === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(stellplatznummer === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               return isEmpty;
           }
