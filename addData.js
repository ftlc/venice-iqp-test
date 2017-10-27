var config = {
    apiKey: "AIzaSyCnsM20oJxNzP3Jlmb4WAQTqr7Ik3-SW_Y",
    authDomain: "venice-iqp-test.firebaseapp.com",
    databaseURL: "https://venice-iqp-test.firebaseio.com",
    projectId: "venice-iqp-test",
    storageBucket: "",
    messagingSenderId: "142043665247"
  };
  firebase.initializeApp(config);

  var database = firebase.database(); //gets firebase object

  function writeUserData(name, num) {
  firebase.database().ref('plaques/' + name).set({
    username: name,
    year: num
  });
}