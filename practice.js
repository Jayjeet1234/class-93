var firebaseConfig = {
    apiKey: "AIzaSyB0JE1dB2dBro2IGDqWKVVkb6bb4V5PZ2w",
    authDomain: "kwitter-39741.firebaseapp.com",
    databaseURL: "https://kwitter-39741-default-rtdb.firebaseio.com",
    projectId: "kwitter-39741",
    storageBucket: "kwitter-39741.appspot.com",
    messagingSenderId: "862386904628",
    appId: "1:862386904628:web:374b712b43ea47b76fb461",
    measurementId: "G-ZMN04PD4BF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function add(){
x=document.getElementById("p").value;
firebase.database().ref("mainfolder").child(x).set({
    Name : "John",
    Number : 1
    });
    firebase.database().ref("mainfolder").child(x).on("value",
    function(snapshot){
     console.log(snapshot.val());
    });
}