var firebaseConfig = {
  apiKey: "AIzaSyB0na0D30qEqAShUOV4w0rpzpGHpP-QKuo",
  authDomain: "kwitter-project-app-7b155.firebaseapp.com",
  databaseURL: "https://kwitter-project-app-7b155-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-app-7b155",
  storageBucket: "kwitter-project-app-7b155.appspot.com",
  messagingSenderId: "218508910052",
  appId: "1:218508910052:web:c210424278ce51c8c3fbf1",
  measurementId: "G-Y8WYNFMBRL"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name1  = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name1 + "!";


function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
