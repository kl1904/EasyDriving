function addUser(){
  window.alert("WTF");
  var ref = firebase.database().ref().child('users');
  ref.set({
  var displayName = document.getElementById("displayName").value;
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

})
//firebase funktion für das registrieren von Nutzern (admin)
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
