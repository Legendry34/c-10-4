const firebaseConfig = {
    apiKey: "AIzaSyDjYNqMmx7_M0pGan3DtjDvpgsyAh-Wt4M",
    authDomain: "kwitter-941d4.firebaseapp.com",
    databaseURL: "https://kwitter-941d4-default-rtdb.firebaseio.com",
    projectId: "kwitter-941d4",
    storageBucket: "kwitter-941d4.appspot.com",
    messagingSenderId: "812958474364",
    appId: "1:812958474364:web:cf26df87566cc9b15ee9f9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}






