usersRef.doc(user.uid).set({
role: "user",
displayName: user.displayName,
email: user.email,
eemailVerified: user.emailVerified,
photoURL: user.photoURL,
isAnonymous: user.isAnonymous,
uid: user.uid});

//Referenzvariablen..


function addCar(){

  var idcounter = 0;
  var db = firebase.firestore();
  var carRef = db.collection("cars");
  var docRef = db.collection("cars").doc(idcounter);
  var marke = document.getElementById("marke").value;
  var modell = document.getElementById("modell").value;


  db.collection("cars").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        idcounter++;

      });
  });

  // Auto in DB anlegen..
  docRef.set({
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

}
