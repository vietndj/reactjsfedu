import React, { Component } from 'react';

class NoiDung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps cua NoiDung.js : ' + nextProps.ten);
    } 
    
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate cua NoiDung.js');
    return true ; 
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate  cua NoiDung.js ');

  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate  cua NoiDung.js ');

  }

    render() {
        console.log("Render cua Noidung.js ");
        return (
            <div>
                <h4> {this.props.ten} </h4> 
            </div>
        );
    }
}

export default NoiDung;