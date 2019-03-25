var db = firebase.firestore();

const markeList = document.querySelector('#marke');
const modellList = document.querySelector('#modell');
const kraftstoffList = document.querySelector('#kraftstoff');
const schaltungList = document.querySelector('#schaltung');
const tuerenList = document.querySelector('#tueren');
const klimaList = document.querySelector('#klima');
const navigationsgeraetList = document.querySelector('#navigationsgeraet');
const plaetzeList = document.querySelector('#plaetze');
const raucherwagenList = document.querySelector('#raucherwagen');
const stellplatznummerList = document.querySelector('#stellplatznummer');




//create element render car
function renderCar(doc){

//neues Element option im select anlegen
  let marke = document.createElement('option');
  let modell = document.createElement('option');
  let kraftstoff = document.createElement('option');
  let schaltung = document.createElement('option');
  let tueren = document.createElement('option');
  let klima = document.createElement('option');
  let navigationsgeraet = document.createElement('option');
  let plaetze = document.createElement('option')
  let raucherwagen = document.createElement('option');
  let stellplatznummer = document.createElement('option');



//Attribute und Daten setzen
  marke.setAttribute('data-id', doc.id);
  marke.textContent = doc.data().marke;


  modell.setAttribute('data-id', doc.id);
  modell.textContent = doc.data().modell;

  kraftstoff.setAttribute('data-id', doc.id);
  kraftstoff.textContent = doc.data().kraftstoff;

  schaltung.setAttribute('data-id', doc.id);
  schaltung.textContent = doc.data().schaltung;

  tueren.setAttribute('data-id', doc.id);
  tueren.textContent = doc.data().tueren;

  klima.setAttribute('data-id', doc.id);
  klima.textContent = doc.data().klima;

  navigationsgeraet.setAttribute('data-id', doc.id);
  navigationsgeraet.textContent = doc.data().navigationsgeraet;

  plaetze.setAttribute('data-id', doc.id);
  plaetze.textContent = doc.data().plaetze;

  raucherwagen.setAttribute('data-id', doc.id);
  raucherwagen.textContent = doc.data().raucherwagen;

  stellplatznummer.setAttribute('data-id', doc.id);
  stellplatznummer.textContent = doc.data().stellplatznummer;



//Daten der Liste hinzufügen
  markeList.appendChild(marke);
  modellList.appendChild(modell);
  kraftstoffList.appendChild(kraftstoff);
  schaltungList.appendChild(schaltung);
  tuerenList.appendChild(tueren);
  klimaList.appendChild(klima);
  navigationsgeraetList.appendChild(navigationsgeraet);
  plaetzeList.appendChild(plaetze);
  raucherwagenList.appendChild(raucherwagen);
  stellplatznummerList.appendChild(stellplatznummer);


}

//getting data
db.collection("cars").get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderCar(doc);
  })
});
