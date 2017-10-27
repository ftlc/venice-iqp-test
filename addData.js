
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnsM20oJxNzP3Jlmb4WAQTqr7Ik3-SW_Y",
    authDomain: "venice-iqp-test.firebaseapp.com",
    databaseURL: "https://venice-iqp-test.firebaseio.com",
    projectId: "venice-iqp-test",
    storageBucket: "",
    messagingSenderId: "142043665247"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function writeUserData(name, num) {
  firebase.database().ref('plaques/' + name).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}



