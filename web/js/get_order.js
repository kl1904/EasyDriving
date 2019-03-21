var db = firebase.firestore();

const markeList = document.querySelector('#marke');
const modellList = document.querySelector('#modell');
const kraftstoffList = document.querySelector('#kraftstoff');
const schaltungList = document.querySelector('#schaltung');
const tuerenList = document.querySelector('#tueren');
const klimaList = document.querySelector('#klima');
const navigationsgeraetList = document.querySelector('#navigationsgeraet');
const raucherwagenList = document.querySelector('#raucherwagen');
const stellplatznummerList = document.querySelector('#stellplatznummer');

function renderOrder(doc) {

  //neues Element (Zeile) in der Tabelle Anlegen
  let marke = document.createElement('td');
  let modell = document.createElement('td');
  let kraftstoff = document.createElement('td');
  let schaltung = document.createElement('td');
  let tueren = document.createElement('td');
  let klima = document.createElement('td');
  let navigationsgeraet = document.createElement('td');
  let raucherwagen = document.createElement('td');
  let stellplatznummer = document.createElement('td');

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
    raucherwagenList.appendChild(raucherwagen);
    stellplatznummerList.appendChild(stellplatznummer);


}

//getting data
db.collection("order").get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderOrder(doc);
  })
});
