var db = firebase.firestore();

function addUser(){

  var role = document.getElementById("role").value;
  var displayName = document.getElementById("name").value;
  var emailneu= document.getElementById("emailneu").value;
  var passwordneu = document.getElementById("passwordneu").value;

  //firebase funktion für das registrieren von Nutzern (admin)
  firebase.auth().createUserWithEmailAndPassword(emailneu, passwordneu).then(function(){

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // Wenn der user angemeldetist mache ...
        console.log("Nutzer wird erstellt");

        //Referenzvariablen..
        var db = firebase.firestore();
        var userRef = db.collection("users");
        var docRef = db.collection("users").doc(user.uid);

              // Wen der Nutzer keine Dokumente hat lege welche in der DB an ..
              userRef.doc(user.uid).set({
              role: role,
              displayName: displayName,
              email: user.email,
              eemailVerified: emailneu,
              photoURL: user.photoURL,
              isAnonymous: user.isAnonymous,
              uid: user.uid}).then(function(){

                firebase.auth().signOut().then(function() {
                // Sign-out successful.
                window.alert("Bitte melde dich nochmal an!");
                location.replace('index.html');
                
              }).catch(function(error) {
                // An error happened.
              });

            });

        }
      });
});
}
