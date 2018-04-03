import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import { connect } from 'react-redux';
// this.props.dulieu
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="a1">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        {this.props.dulieu}
        <News />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

export default connect(mapStateToProps)(App);
