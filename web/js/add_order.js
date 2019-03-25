function addOrder(){

  var idcounter = "0";
  var db = firebase.firestore();
  var orderRef = db.collection("order");
  var vorname = document.getElementById("vorname").value;
  var name = document.getElementById("name").value;
  var abholdatum = document.getElementById("abholdatum").value;
  var rueckgabedatum = document.getElementById("rueckgabedatum").value;
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
  var leihgrund = document.getElementById("leihgrund").value;


  db.collection("order").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        idcounter++;

      });

      // Order in DB anlegen..
      var id = idcounter.toString();
      orderRef.add({
      rentid: idcounter,
      vorname: vorname,
      name: name,
      abholdatum: abholdatum,
      rueckgabedatum: rueckgabedatum,
      marke: marke,
      modell: modell,
      kraftstoff: kraftstoff,
      schaltung: schaltung,
      tueren: tueren,
      klima: klima,
      navigationsgeraet:navigationsgeraet,
      plaetze: plaetze,
      raucherwagen: raucherwagen,
      stellplatznummer: stellplatznummer,
      leihgrund: leihgrund});



  });
}
