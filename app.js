// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBdtiCkwcUcO-ktsDy4CjePOhww0uAJFQo",
    authDomain: "adminbd-99e5c.firebaseapp.com",
    projectId: "adminbd-99e5c",
  });
  
  var db = firebase.firestore();

  function agregar(){

    var nombre = document.getElementById('Nombre(s)').value;
    var apellido = document.getElementById('Apellido(s)').value;
    var año = document.getElementById('Año').value;

    console.log(nombre, apellido, año);


    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: año
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

  }
  