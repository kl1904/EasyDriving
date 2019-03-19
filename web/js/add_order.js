function addOrder() {

  var idcounter = "0";
  var db = firebase.firestore();
  orderRef = db.collection("order");
  var abholdatum = document.getElementById("inputDateAbhol").value;
  var rueckgabedatum = document.getElementById("inputDateRück").value;
  var leihgrund = document.getElementById("inputReason").value;

  db.collection("order").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
        //schreiben alle Order mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        idcounter++;
      });

      // Antrag in DB anlegen..
      var id = idcounter.toString();
      orderRef.doc(id).set({
      id: idcounter,
      abholdatum: abholdatum,
      rueckgabedatum: rueckgabedatum,
      leihgrund: leihgrund});

  });
}
