
var db = firebase.firestore();




              db.collection("users").get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  addTableRow(doc.data());
                  if (document.getElementsByClassName("no-records-found")){
                    var elems = document.getElementsByClassName('no-records-found');
                    for (var i=0;i<elems.length;i+=1){
                      elems[i].style.display = 'none';
                    }
                  }
              });
            });

            var counter = 0;
            function addTableRow(doc) {
              var newRow = $("<tr>");
                var cols = "";

                cols += '<td class="bs-checkbox "><input data-index="0" name="btSelectItem" type="checkbox"></td>';
                cols += '<td>'+doc.uid+'</td>';
                cols += '<td>'+doc.email+'</td>';
                cols += '<td>'+doc.role+'</td>';
                cols += '<td>'+doc.photoURL+'</td>';
                newRow.append(cols);
                $("table.user_table").append(newRow);
                counter++;
            }
