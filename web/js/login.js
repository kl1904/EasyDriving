//user authentifikation ob der user angemeldet ist..
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Wenn der user angemeldetist mache ...
    console.log("Du bist angemeldet");

    //Referenzvariablen..
    var db = firebase.firestore();
    var usersRef = db.collection("users");
    var docRef = db.collection("users").doc(user.uid);

    //Hole Benutzerdokumente aus der Datenbank
    docRef.get().then(function(doc) {
    //Wenn die Dokumente existieren mache..
    if (doc.exists) {
      //Gebe Daten in der Konsole aus..
        console.log("Document data:", doc.data());
        // Weiterleitung zum Dashboard, wenn du noch auf der Seite mit dem Loginformular bist.. (unterscheidung admin und user)
        if ((document.getElementById("loginform"))) {
          if (doc.data().role === "admin"){
            location.replace('admin_rental_currently.html');
          }else{
            location.replace('user_rental_new.html');
          }
        }

    } else {
          // Wen der Nutzer keine Dokumente hat lege welche in der DB an ..
          usersRef.doc(user.uid).set({
          role: "user",
          displayName: user.displayName,
          email: user.email,
          eemailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid});
    }
    });


  } else {
    // Wenn der Nutzer nicht angemeldet ist mache..
    console.log("Du bist abgemeldet");

    //Wenn nicht angemeldet ist soll ins Login zurückkehren...
    if ((document.getElementById("content"))) {
      location.replace('index.html');
    }
  }
});


//Loginfunktion

function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

//firebase funktion für das login mit errorhandling
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
}

//firebase funktion für logout..
function logout(){
  firebase.auth().signOut();
}
