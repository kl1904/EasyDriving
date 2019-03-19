

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
      id: idcounter,
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