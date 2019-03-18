
var config = {
apiKey: "AIzaSyAMBP0QfhwnsH8RTgdosyW-yYMNCoZTyDI",
authDomain: "easydriving-ed41c.firebaseapp.com",
databaseURL: "https://easydriving-ed41c.firebaseio.com",
projectId: "easydriving-ed41c",
storageBucket: "easydriving-ed41c.appspot.com",
messagingSenderId: "171104780631"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("Du bist angemeldet");
    //Nutzer in DB anlegen ..
    var db = firebase.firestore();
    var usersRef = db.collection("users");
    var docRef = db.collection("users").doc(user.uid);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        // Weiterleitung zum Dashboard..
        if ((document.getElementById("loginform"))) {
          if (doc.data().role === "admin"){
            location.replace('admin_rental_currently.html');
          }else{
            location.replace('user_rental_new.html');
          }
        }

    } else {
        // doc.data() will be undefined in this case
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
    // No user is signed in.
    console.log("Du bist abgemeldet");

    //Wenn nicht angemeldet ist soll ins Login zurückkehren...(führs erste)
    if ((document.getElementById("content"))) {
      location.replace('index.html');
    }
  }
});


function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
}

function register(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

function logout(){
  firebase.auth().signOut();
}
