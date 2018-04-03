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

        case "DELETE":
          return {...state,num:state.num.filter((value,i) => i != action.number  )}       
          break;

      
        default:
          return state; 
          break;
      }
     
    }
    var store1 = redux.createStore(reducer1);
    store1.subscribe(() => {
      var str = JSON.stringify(store1.getState());
      document.getElementById('tb').innerHTML = str; 
      return str;
    })

    console.log(store1.getState());
    store1.dispatch({type:"CHANGE_EDIT_STATUS"})
    console.log(store1.getState());

    store1.dispatch({
      type:"ADD_NEW",
      newItem:"Tai Nghe "
    })
    console.log(store1.getState());

    store1.dispatch({
      type:"DELETE",
      number:0
    })
    console.log(store1.getState());
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">str</h1>
        </header>
        <p className="App-intro" id="tb">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
