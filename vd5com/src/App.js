import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let So1 = <div> Day la So 1 </div>;
let So2 = <div> Day la So 2 </div>; 
let HamSo1 = () => (
  <div> Ham so 1 </div>
);

function HamSo3(){
  return <div> Ham so 3 </div> ; 
}
function NhieuDong(){
  return (
    <div>
      <h2> hello </h2> 
      <h3> halu </h3> 
    </div>
  );

  <div> Nhieu dong </div> ; 
}
class HamSo4 extends Component {
  render() {
    return (
      <div>
        <h2> zing {this.props.name} </h2> 
        <h2> zing {this.props.age} </h2> 
      </div>
    );
  }
}


 



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {So1}
        {HamSo1}
        {HamSo3}
        <hr/>
        <HamSo1/>
        <NhieuDong/>
        <HamSo4 name="viet" age ="32"/>
           To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
