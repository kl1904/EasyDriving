
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  if (!(document.getElementById("content"))) {
    location.replace('user_dashboard.html');
  }
    console.log("Du bist angemeldet");
  } else {
    // No user is signed in.
    console.log("Du bist abgemeldet");
    if ((document.getElementById("content"))) {
      location.replace('index.html');
      document.getElementById("content").style.visibility ="collapse";
    }
  }
});


function login(){

  var userEmail = document.getElementById("id").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
