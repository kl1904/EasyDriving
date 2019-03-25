
var db = firebase.firestore();
//Wenn der DB-Eintrag cars existiert
db.collection("cars").get().then(function(querySnapshot) {
//Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
    querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        //Wenn ein Objekt mit dem Classennamen no-records-found existiert setze bei allen das display auf none (unsichtbar)
        if (document.getElementsByClassName("no-records-found")){
            var elems = document.getElementsByClassName('no-records-found');
            for (var i=0;i<elems.length;i+=1){
                elems[i].style.display = 'none';
            }
        }

        //Variablen newRow -> neue Datenreihe ; cols -> Zellenininhalte
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td class="bs-checkbox "><input data-index="0" name="btSelectItem" type="checkbox"></td>';
        cols += '<td>'+doc.data().carid+'</td>';
        cols += '<td>'+doc.data().marke+'</td>';
        cols += '<td>'+doc.data().modell+'</td>';
        cols += '<td>'+doc.data().kraftstoff+'</td>';
        cols += '<td>'+'<a href="#autodetails">'+'Details'+'</a>'+'</td>';


        //Füge die Zelleninhalte in die neue Datenreihe und füge diese in die Tabelle mit der id user_table
        newRow.append(cols);
        $("table.car_table").append(newRow);


    });

});
