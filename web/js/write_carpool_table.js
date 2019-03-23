
var db = firebase.firestore();
//Wenn der DB-Eintrag cars existiert
db.collection("cars").get().then(function(querySnapshot) {
//Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
    querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        //Rufe Funktion addUserTableRow auf
        addCarToTableRow(doc.data());
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
function addCarToTableRow(doc) {
    //Variablen newRow -> neue Datenreihe ; cols -> Zellenininhalte
    var newRow = $("<tr>");
    var cols = "";

    cols += '<td class="bs-checkbox "><input data-index="0" name="btSelectItem" type="checkbox"></td>';
    cols += '<td>'+doc.id+'</td>';
    cols += '<td>'+doc.klima+'</td>';
    cols += '<td>'+doc.kraftstoff+'</td>';
    cols += '<td>'+doc.marke+'</td>';
    cols += '<td>'+doc.modell+'</td>';
    cols += '<td>'+doc.navigationsgeraet+'</td>';
    cols += '<td>'+doc.plaetze+'</td>';
    cols += '<td>'+doc.raucherwagen+'</td>';
    cols += '<td>'+doc.schaltung+'</td>';
    cols += '<td>'+doc.stellplatznummer+'</td>';
    cols += '<td>'+doc.tueren+'</td>';

    //Füge die Zelleninhalte in die neue Datenreihe und füge diese in die Tabelle mit der id user_table
    newRow.append(cols);
    $("table.car_table").append(newRow);

    counter++;
}

/*
// add Row
           function addCarToTableRow()
           {
               // get the table by id
               // create a new row and cells
               // get value from input text
               // set the values into row cell's
               if(!checkEmptyInput()){
                 //get input values
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


                 //get the html table
                 var table = document.getElementsById("table")[0];

                 //add new empty row to table
                 var newRow = table.insertRow(1);

                 //add cells to row
                 var cel1 = newRow.insertCell(0);
                 var cel2 = newRow.insertCell(1);
                 var cel3 = newRow.insertCell(2);

                 //add values to the cells
                 cel1.innerHTML = marke;
                 cel2.innerHTML = modell;
                 cel3.innerHTML = kraftstoff;
                 cel4.innerHTML = schaltung;
                 cel5.innerHTML = tueren;
                 cel6.innerHTML = klima;
                 cel7.innerHTML = navigationsgeraet;
                 cel8.innerHTML = plaetze;
                 cel9.innerHTML = raucherwagen;
                 cel10.innerHTML = stellplatznummer;

               // call the function to set the event to the new row
               selectedRowToInput();
           }
           }

           // display selected row data into input text
           function selectedRowToInput()
           {

               for(var i = 1; i < table.rows.length; i++)
               {
                   table.rows[i].onclick = function()
                   {
                     // get the seected row index
                     rIndex = this.rowIndex;
                     document.getElementById("marke").value = this.cell[0].innerHTML;
                     document.getElementById("modell").value = this.cell[1].innerHTML;
                     document.getElementById("kraftstoff").value = this.cell[2].innerHTML;
                     document.getElementById("schaltung").value = this.cell[3].innerHTML;
                     document.getElementById("tueren").value = this.cell[4].innerHTML;
                     document.getElementById("klima").value = this.cell[5].innerHTML;
                     document.getElementById("navigationsgeraet").value = this.cell[6].innerHTML;
                     document.getElementById("raucherwagen").value = this.cell[7].innerHTML;
                     document.getElementById("stellplatznummer").value = this.cell[8].innerHTML;
                   };
               }
           }
           selectedRowToInput();

           function editHtmlTbleSelectedRow()
           {

                   var marke = document.getElementById("marke").value,
                      modell = document.getElementById("modell").value,
                      kraftstoff = document.getElementById("kraftstoff").value,
                      schaltung = document.getElementById("schaltung").value,
                      tueren = document.getElementById("tueren").value,
                      klima = document.getElementById("klima").value,
                      navigationsgeraet = document.getElementById("navigationsgeraet").value,
                      plaetze = document.getElementById("plaetze").value,
                      raucherwagen = document.getElementById("raucherwagen").value,
                      stellplatznummer = document.getElementById("stellplatznummer").value;


              if(!checkEmptyInput()){

               table.row[rIndex].cells[0].innerHTML = marke;
               table.row[rIndex].cells[1].innerHTML = modell;
               table.row[rIndex].cells[2].innerHTML = kraftstoff;
               table.row[rIndex].cells[3].innerHTML = schaltung;
               table.row[rIndex].cells[4].innerHTML = tueren;
               table.row[rIndex].cells[5].innerHTML = klima;
               table.row[rIndex].cells[6].innerHTML = navigationsgeraet;
               table.row[rIndex].cells[7].innerHTML = plaetze;
               table.row[rIndex].cells[8].innerHTML = raucherwagen;
               table.row[rIndex].cells[9].innerHTML = stellplatznummer;
             }
           }

           function removeSelectedRow()
           {
               table.deleteRow(rIndex);
               // clear input text
               document.getElementById("marke").value = "";
               document.getElementById("model").value = "";
               document.getElementById("kraftstoff").value = "";
               document.getElementById("schaltung").value = "";
               document.getElementById("tueren").value = "";
               document.getElementById("klima").value = "";
               document.getElementById("navigationsgeraet").value = "";
               document.getElementById("plaetze").value = "";
               document.getElementById("raucherwagen").value = "";
               document.getElementById("stellplatznummer").value = "";
           }
