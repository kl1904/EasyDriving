function addUser(){
  window.alert("WTF");

  //var displayName = document.getElementById("displayName").value; (displayName gibt es nicht im formaular gucke wie die id heißt)
  var email= document.getElementById("email").value;
  var password = document.getElementById("password").value;

//firebase funktion für das registrieren von Nutzern (admin)
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert(errorMessage);
  console.log("nutzer erstellt");
  // ...
});

}
