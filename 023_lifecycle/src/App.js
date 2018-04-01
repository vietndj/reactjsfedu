import React, { Component } from 'react';
import './App.css';
import NoiDung from './noiDung';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2",
      
    }
  }
  
  
  componentWillMount() {
    console.log('componentWillMount chay roi ')
  }
  componentDidMount() {
    console.log('Component didmout da chay roi ');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate da chay roi ');
    return true ; 
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate da chay roi ');

  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate da chay roi ');

  }
  capNhatState = () => {
    this.setState({
      trangthai:"CapNhat1",
      trangthai2:"CapNhat2"
    });
  }


  render() {
     console.log(this.state.trangthai);
    return (

      <div className="App">
        <NoiDung ten={this.state.trangthai2}> </NoiDung>
         <button onClick={() => this.capNhatState()}> Click de update state </button>
      </div>
    );
  }
}

export default App;
 