function addUser(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

//firebase funktion für das registrieren von Nutzern (admin)
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
