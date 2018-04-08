import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA7mA7YMkZWkW_D2brIdl0GWCVIMaMR6SM",
    authDomain: "notereactfedu.firebaseapp.com",
    databaseURL: "https://notereactfedu.firebaseio.com",
    projectId: "notereactfedu",
    storageBucket: "notereactfedu.appspot.com",
    messagingSenderId: "590850354788"
  };
   firebase.initializeApp(config);
   export const noteData = firebase.database().ref('dataForNote');