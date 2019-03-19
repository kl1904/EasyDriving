function addOrder() {

  var idcounter = "0";
  var db = firebase.firestore();
  var orderRef = db.collection("order");
  var uid = sessionStorage.uid;
  var abholdatum = document.getElementById("abholdatum").value;
  var rueckgabedatum = document.getElementById("rueckgabedatum").value;
  var leihgrund = document.getElementById("leihgrund").value;

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
      orderid: idcounter,
      carid: carid,
      uid:  uid,
      abholdatum: abholdatum,
      rueckgabedatum: rueckgabedatum,
      leihgrund: leihgrund});

  });
}
