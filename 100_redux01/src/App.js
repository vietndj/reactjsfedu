import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var redux = require('redux');
var defaulState = {
  listUser:['viet','nam','my'],
  editStatus:false 
}
var reducer = (state = defaulState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
      return {...state,editStatus:!state.editStatus}; 
      break;
   
    case "ADD":
      return {...state,listUser:[...state.listUser]}; 
      break;
   
    default:
      return state;
  }
}
var store = redux.createStore(reducer); 
console.log(store.getState());
store.dispatch({type:'CHANGE_EDIT_STATUS'});
console.log(store.getState());

var redux = require('redux');
var defaulState ={
  so : [4,7,3],
  status:false 
};
// var reducer1 = (state=defaulState, action) => {
//   switch (action.type) {
//     case value:'Change_status':
//         return 
//       break;
  
//     default:
//       break;
//   }
// }



class App extends Component {
  


  render() {
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
