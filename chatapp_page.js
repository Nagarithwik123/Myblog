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

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          Like:0
          });
          document.getElementById("msg").value="";
    }