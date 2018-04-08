
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA7mA7YMkZWkW_D2brIdl0GWCVIMaMR6SM",
    authDomain: "notereactfedu.firebaseapp.com",
    databaseURL: "https://notereactfedu.firebaseio.com",
    projectId: "notereactfedu",
    storageBucket: "notereactfedu.appspot.com",
    messagingSenderId: "590850354788"
  };
  
  export const firebaseConnect =  firebase.initializeApp(config);

  var data = firebase.database().ref('dataForNote/node3' );
//sua du lieu 
data.set({
    id:3,
    title:"Ghi chu 20/12 ",
    content : " Demo content for note "
})


    //   data.once('value').then(function(snapshot){
    //       console.log(snapshot.val());
    //   })