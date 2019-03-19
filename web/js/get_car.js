
var db = firebase.firestore();

function getCarData(doc) {
  let cars = [];
  idcounter = 0;
  //Wenn der DB-Eintrag users existiert
  db.collection("cars").get().then(function(querySnapshot) {
  //Mache Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {

          cars[idcounter] = [doc.data().marke, doc.data().modell, doc.data().kraftstoff, doc.data().schaltung, doc.data().tueren, doc.data().klima, doc.data().navigationsgeraet, doc.data().raucherwagen, doc.data().stellplatznummer]

          for (i = 0; i < cars[idcounter].length; i++) {
            var x = document.getElementById(i.toString());
            var option = document.createElement("option");
            option.text = cars[idcounter][i];
            x.add(option);
          }
          idcounter++;

      });



  });

console.log(cars);


}
