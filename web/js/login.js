firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(window.location.href);

    if (window.location.href == "file:///C:/Users/sgeist/Desktop/DHBW/WebDB/easydriving/EasyDriving/web/index.html"){
    location.replace('user_dashboard.html');
    window.alert("Du bist angemeldet");
    }

    console.log("Du bist angemeldet");

  } else {
    // No user is signed in.
    console.log("Du bist abgemeldet");
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
