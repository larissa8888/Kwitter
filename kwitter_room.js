
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCIbJgUa7CP4N6We25K7tZ7lEI2MW4Ukxw",
      authDomain: "kwitter-larissa.firebaseapp.com",
      databaseURL: "https://kwitter-larissa-default-rtdb.firebaseio.com",
      projectId: "kwitter-larissa",
      storageBucket: "kwitter-larissa.appspot.com",
      messagingSenderId: "335773304449",
      appId: "1:335773304449:web:96ea1e552abbc3d7402f80"
    };
    
    
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="!Bienvenid@ "+ user_name +"!";

  function addRoom()
   {
   room_name=document.getElementById("room_name").value ;
   firebase.database().ref("/").child(room_name).update({ purpose: "creando sala nueva" });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room_name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>" ;
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name); 
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
   }
   function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
   }