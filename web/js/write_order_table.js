var db = firebase.firestore();
//Wenn der DB-Eintrag users existiert
db.collection("order").get().then(function(querySnapshot) {
//Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
    querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        //Rufe Funktion addUserTableRow auf
        addOrderTableRow(doc.data());
        //Wenn ein Objekt mit dem Classennamen no-records-found existiert setze bei allen das display auf none (unsichtbar)
        if (document.getElementsByClassName("no-records-found")){
            var elems = document.getElementsByClassName('no-records-found');
            for (var i=0;i<elems.length;i+=1){
                elems[i].style.display = 'none';
            }
        }
    });
});

var counter = 0;
function addOrderTableRow(doc) {
    //Variablen newRow -> neue Datenreihe ; cols -> Zellenininhalte
    var newRow = $("<tr>");
    var cols = "";

    cols += '<td class="bs-checkbox "><input data-index="0" name="btSelectItem" type="checkbox"></td>';
    cols += '<td>'+doc.rentid+'</td>';
    cols += '<td>'+doc.abholdatum+'</td>';
    cols += '<td>'+doc.rueckgabedatum+'</td>';
    cols += '<td>'+doc.carid+'</td>';
    cols += '<td>'+doc.uid+'</td>';

    //Füge die Zelleninhalte in die neue Datenreihe und füge diese in die Tabelle mit der id user_table
    newRow.append(cols);
    $("table.order_table").append(newRow);

    counter++;
}

function deleteOrderTableRow(doc) {
  db.collection("order").doc("").delete().then(function(){

    //var x = document.getElementById("order_table");
    //x.remove(x.selectedIndex);

    console.log("document successfully delete");
  }).catch(function(error){
    console.error("Error removing document: ", error);
  })

}
