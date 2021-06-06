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

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      my_name_is:"naga rithwik "
      });
  }