

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
                 

                 //get the html table
                 var table = document.getElementsByTagName('table')[0];

                 //add new empty row to table
                 var newRow = table.insertRow(1);

                 //add cells to row
                 var cel1 = newRow.insertCell(0);
                 var cel2 = newRow.insertCell(1);
                 var cel3 = newRow.insertCell(2);

                 //add values to the cells
                 cel1.innerHTML = title;
                 cel2.innerHTML = number;
                 cel3.innerHTML = description;
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
                     document.getElementById("title").value = this.cells[0].innerHTML;
                     document.getElementById("number").value = this.cells[1].innerHTML;
                     document.getElementById("description").value = this.cells[2].innerHTML;
                   };
               }
           }
           selectedRowToInput();

           function editHtmlTbleSelectedRow()
           {
               var title = document.getElementById("title").value,
                  number = document.getElementById("number").value,
                   description = document.getElementById("description").value;
              if(!checkEmptyInput()){
               table.rows[rIndex].cells[0].innerHTML = title;
               table.rows[rIndex].cells[1].innerHTML = number;
               table.rows[rIndex].cells[2].innerHTML = description;
             }
           }

           function removeSelectedRow()
           {
               table.deleteRow(rIndex);
               // clear input text
               document.getElementById("title").value = "";
               document.getElementById("number").value = "";
               document.getElementById("description").value = "";
           }
