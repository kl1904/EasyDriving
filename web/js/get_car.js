//
var db = firebase.firestore();

const caridList = document.querySelector('#carid');
const markeList = document.querySelector('#marke');
const modellList = document.querySelector('#modell');
const kraftstoffList = document.querySelector('#kraftstoff');




//create element render car
function renderCar(doc){

//neues Element option im select anlegen
  let carid = document.createElement('option');
  let marke = document.createElement('option');
  let modell = document.createElement('option');
  let kraftstoff = document.createElement('option');



//Attribute und Daten setzen
  carid.setAttribute('data-id', doc.id);
  carid.textContent = doc.data().carid;

  marke.setAttribute('data-id', doc.id);
  marke.textContent = doc.data().marke;


  modell.setAttribute('data-id', doc.id);
  modell.textContent = doc.data().modell;

  kraftstoff.setAttribute('data-id', doc.id);
  kraftstoff.textContent = doc.data().kraftstoff;

//Daten der Liste hinzufügen
  caridList.appendChild(carid);
  markeList.appendChild(marke);
  modellList.appendChild(modell);
  kraftstoffList.appendChild(kraftstoff);

  if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.carid = carid;
      }
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }

}

//getting data
db.collection("cars").get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderCar(doc);
  })
}).catch(function(error) {
  // An error happened.
});
