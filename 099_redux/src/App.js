import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
   var redux = require('redux');
   var oldState = {
     num:["man hinh","chuot","ban phim"],
     editStatus : true
   }
    var reducer1 = (state=oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return {...state,editStatus:!state.editStatus}          
          break;
        case "ADD_NEW":
          return {...state,num:[...state.num,action.newItem]}       
          break;

      
        default:
          break;
      }
      return state; 
    }
    var store1 = redux.createStore(reducer1);
    console.log(store1.getState());
    store1.dispatch({type:"CHANGE_EDIT_STATUS"})
    console.log(store1.getState());

    store1.dispatch({
      type:"ADD_NEW",
      newItem:"Tai Nghe "
    })
    console.log(store1.getState());


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
