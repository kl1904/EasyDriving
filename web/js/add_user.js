var db = firebase.firestore();

function addUser(){

  var role = document.getElementById("role").value;
  var displayName = document.getElementById("name").value;
  var email= document.getElementById("emailneu").value;
  var password = document.getElementById("passwordneu").value;



  //firebase funktion für das registrieren von Nutzern (admin)
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.

    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    console.log("nutzer erstellt");
    // User is signed in.
    console.log(user.uid);

  });



}
