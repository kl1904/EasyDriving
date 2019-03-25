var db = firebase.firestore();

function deleteUser(){
  if(/*"??"==true...ref auf checkbox = true&ref zu user?*/){
  db.collection("users").doc(/*user.uid???*/).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
      window.alert("ersteres");
  });
}
else{
  window.alert("else");
  }
}
