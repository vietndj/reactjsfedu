import React, { Component } from 'react';
 import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

import {connect} from 'react-redux';
 class App extends Component { 

  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  render() {   
    return (
      <div >
        <Nav/>
        <div className="container">
        <div className="row">
            <NoteList/>
            {
              this.showForm()
            }
        </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)
 
