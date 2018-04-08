import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import {firebaseConnect} from "./firebaseConnect"
class App extends Component {

  pushData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title:"Ghi chu so 3",
      content: "Noi dung ghi chu so 3"
    })
    console.log(' ban vua them du lieu vao firebase');
  }

  deleteData = (id) => {
    var connectData  = firebase.database().ref('dataForNote');
    connectData.child(id).remove(); 
    console.log(" Xoa thanh cong phan tu co id la : " + id );
  }
  render() {
    console.log(firebaseConnect);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <button onClick={() => this.pushData() }> Click de them moi bang ham  push </button>
         <hr/>
          <button onClick={() => this.deleteData('node2') }> Xoa du lieu </button>
      </div>
    );
  }
}

export default App;
