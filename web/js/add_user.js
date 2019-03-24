var db = firebase.firestore();

function addUser(){

  var role = document.getElementById("role").value;
  var displayName = document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var password = document.getElementById("password").value;

//firebase funktion für das registrieren von Nutzern (admin)
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(errorMessage);
  console.log("nutzer erstellt");
  // ...;
});
/*
var userRef = db.collection("users");
var docRef = db.collection("users").doc(user.uid);

//Hole Benutzerdokumente aus der Datenbank
docRef.get().then(function(doc) {
//Wenn die Dokumente existieren mache..
if (doc.exists) {
  //Gebe Daten in der Konsole aus..
  userRef.doc(user.uid).set({
  role: "role",
  displayName: "name",
  email: user.email,
  eemailVerified: user.emailVerified,
  photoURL: user.photoURL,
  isAnonymous: user.isAnonymous,
  uid: user.uid});
  } else {
}
});
/*var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "name",
  role: "role",
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});




/*db.collection("users").doc(document.querySelector(user.uid)).set({
      displayName: document.querySelector("#name").value,
      role: document.querySelector("#role").value,

  })
  .then(function() {
      console.log("Erfolgreich hinzugefügt!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });*/
window.alert("Nutzer erstellt");
}
