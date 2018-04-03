import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Intro from './Intro';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          <Intro dataA = {this.props.mang}/>
        
      </div>
    );
  }
}

// export default App;
// export default connect(function(state){
//   return      {mang:state.num} 
// })(App)

const mapStateToProps = (state, ownProps) => {
  return {
    mang:state.num
  }
}
export default   connect(mapStateToProps)(App)

// export default   connect(mapStateToProps)(FoodList)