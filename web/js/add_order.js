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
  var navigationsgeraet = document.getElementsByName("navigationsgeraet").value;
  var plaetze = document.getElementById("plaetze").value;
  var raucherwagen = document.getElementById("raucherwagen").value;
  var stellplatznummer = document.getElementById("stellplatznummer").value;


  db.collection("order").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        idcounter++;

      });

      // Auto in DB anlegen..
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
      stellplatznummer: stellplatznummer});

      //location.replace('user_rental_overview.html');

  });
}


function updateSelected(marke, modell, kraftstoff) {

  // populate select 'marke'
     var parentElement = document.getElementById('marke');
     parentElement.innerHTML = null;
     for (var i = 1; i < music.length; i++) {
       var newChild = document.createElement('option');
       newChild.setAttribute('value', i);
       if (i == marke) newChild.setAttribute('selected', 'selected');
       newChild.innerHTML = marke[i][0];
       parentElement.appendChild(newChild);
     }
}
