
var db = firebase.firestore();

function getCarData(doc) {
  let cars = [];
  idcounter = 0;
  //Wenn der DB-Eintrag users existiert
  db.collection("cars").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
          //schreiben alle User mit ihren Daten in die Konsole
          console.log(doc.id, " => ", doc.data());
          //Rufe Funktion addUserTableRow auf

          cars[idcounter] = [doc.data().marke, doc.data().modell, doc.data().kraftstoff, doc.data().schaltung, doc.data().tueren, doc.data().klima, doc.data().navigationsgeraet, doc.data().pleatze, doc.data().raucherwagen, doc.data().stellplatznummer]

          idcounter++;
      });

  });

console.log(cars);
for (i = 0; i <= idcounter.length; i++) {
  for (j = 0; j <= cars[i].length; j++) {
    var x = document.getElementById("selectmarke");
    var option = document.createElement("option");
    option.text = cars[i][j];
    x.add(option);
  }

}



}
