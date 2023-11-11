var firebaseConfig = {
    apiKey: "AIzaSyBg58APbVPZWEkay0gMM0hlUVkik4nRcIY",
    authDomain: "lets-chat-web-app-23c08.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-23c08-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-23c08",
    storageBucket: "lets-chat-web-app-23c08.appspot.com",
    messagingSenderId: "323869577933",
    appId: "1:323869577933:web:4d43b0e233f79ac69d8f84"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username")
room_name = localStorage.getItem("room_name")

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;

                  }
            });
      });
}
getData();

function send()
{
      msg = document.getElementById("msg").value ; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = ""
}