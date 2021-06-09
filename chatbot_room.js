var firebaseConfig = {
    apiKey: "AIzaSyDlkMus8vo_YcC5AjQfRIpPsGBnmlnmOX4",
    authDomain: "chatbot-e20fc.firebaseapp.com",
    databaseURL: "https://chatbot-e20fc-default-rtdb.firebaseio.com",
    projectId: "chatbot-e20fc",
    storageBucket: "chatbot-e20fc.appspot.com",
    messagingSenderId: "737531504486",
    appId: "1:737531504486:web:b50c7be7c8effa93af8aa7",
    measurementId: "G-32QDC1KJEG"
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
       window.location="chatbot_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

   console.log("Room names"+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;

  });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}