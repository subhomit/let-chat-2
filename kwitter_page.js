//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCjGPo7UGE63x3iuw0PerTuKa0MAJh288U",
    authDomain: "kwitter-1c217.firebaseapp.com",
    databaseURL: "https://kwitter-1c217-default-rtdb.firebaseio.com",
    projectId: "kwitter-1c217",
    storageBucket: "kwitter-1c217.appspot.com",
    messagingSenderId: "321443798360",
    appId: "1:321443798360:web:dae338449d04fb9893d92d"
  };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("u_name");
    roomname = localStorage.getItem("room_name");
    function send(){
          user_msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name : username,
                message : user_msg,
                like : 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
