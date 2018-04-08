import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        noteTitle:'',
        noteContent: '',
        id:''
      }
    }
    
    componentWillMount() {
      if(this.props.editItem){  // edit case 
        this.setState({
          noteTitle:this.props.editItem.noteTitle,
          noteContent: this.props.editItem.noteTitle,
          id:this.props.editItem.id
        });
      }
    }
    



    isChange = (event) => {
      const name = event.target.name ; 
      const value = event.target.value;       
      this.setState({
        [name]:value
      })
    }

    addData = (title,content) => {
      if(this.state.id)    { //edit case 
        var editObject = {};
        editObject.id = this.state.id ; 
        editObject.noteContent = this.state.noteContent; 
        editObject.noteTitle = this.state.noteTitle ; 

        this.props.editDataStore(editObject);
        this.props.changeEditStatus()  ; // tat form 
      }
      else{
          var item = {}; 
         item.noteTitle = title; 
         item.noteContent= content;        
         this.props.addDataStore(item);  // su dung reducer trong store , // displatch ADD_DATA
      }
    
     
    }
    render() {       
        return (
            <div className="col-4">
            <h3>SỬA NỘI DUNG NOTE</h3>
            <form>
            <div className="form-group">
              <label htmlFor="noteTitle">Tiêu đề note</label>
              <input defaultValue={this.props.editItem.noteTitle} onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
              <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
              <label htmlFor="noteContent">Nội dung note</label>
              <textarea  defaultValue={this.props.editItem.noteContent}   onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle" 
                />

                   
              <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
            </div>
            <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
            </form>
          </div>
          
        );
    }
}
 // props.editItem
const mapStateToProps = (state, ownProps) => {
  return {
    editItem : state.editItem
  }
}
// this.props.testThoi
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type:"ADD_DATA",getItem})
    },
    editDataStore: (getItem) => {
      dispatch({type:"EDIT",getItem})
    },
    changeEditStatus: () => {
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    }
  }
}
// this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm) ;