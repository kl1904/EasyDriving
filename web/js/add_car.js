

function addCar(){

  var idcounter = "0";
  var db = firebase.firestore();
  var carRef = db.collection("cars");
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


  db.collection("cars").get().then(function(querySnapshot) {
  //Mache/ Führe für alle Elemente die darauf folgenden Sachen aus
      querySnapshot.forEach(function(doc) {
        //schreiben alle User mit ihren Daten in die Konsole
        console.log(doc.id, " => ", doc.data());
        idcounter++;

      });

      // Auto in DB anlegen..
      var id = idcounter.toString();
      carRef.doc(id).set({
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

      location.replace('admin_carpool_overview.html');

  });



}

          var rIndex,
               table = document.getElementById("table");

           // check the empty input
           function checkEmptyInput()
           {
               var isEmpty = false,
                marke = document.getElementById("marke").value;
                modell = document.getElementById("modell").value;
                kraftstoff = document.getElementById("kraftstoff").value;
                schaltung = document.getElementById("schaltung").value;
                tueren = document.getElementById("tueren").value;
                klima = document.getElementById("klima").value;
                navigationsgeraet = document.getElementById("navigationsgeraet").value;
                plaetze = document.getElementById("plaetze").value;
                raucherwagen = document.getElementById("raucherwagen").value;
                stellplatznummer = document.getElementById("stellplatznummer").value;

               if(marke === ""){
                   alert("Bitte gib für den Auftrag einen Titel ein!");
                   isEmpty = true;
               }
               else if(modell === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(krafstoff === ""){
                   alert("Bitte füge deinem Auftrag eine kurze Beschreibung hinzu!");
                   isEmpty = true;
               }
               else if(schaltung === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(tueren === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(klima === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(navigationsgeraet === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(plaetze === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(raucherwagen === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               else if(stellplatznummer === ""){
                   alert("Bitte gib für den Auftrag die Anzahl der Auftragnehmer ein");
                   isEmpty = true;
               }
               return isEmpty;
           }


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
