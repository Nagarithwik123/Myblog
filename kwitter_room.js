
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBhmULLfetZ_mVWBD_XAnCV1mN5Wti5B4w",
      authDomain: "kwitter-f01e0.firebaseapp.com",
      databaseURL: "https://kwitter-f01e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-f01e0",
      storageBucket: "kwitter-f01e0.appspot.com",
      messagingSenderId: "366873295663",
      appId: "1:366873295663:web:0537e2e71e882297a73fda",
      measurementId: "G-NCFNSWQ4C0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome" + user_name + "!";

     function addRoom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
           });
           localStorage.setItem("room_name", room_name);
           window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room names"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
  }
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
  }