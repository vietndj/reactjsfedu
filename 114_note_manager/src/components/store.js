import {noteData} from './firebaseConnect' ;

var redux = require('redux');
const noteInitialState = {
    isEdit : false,
    editItem:{}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":             
            noteData.push(action.getItem);
            console.log(' Them du lieu ' + JSON.stringify(action.getItem) + " thanh cong ");
            return state 
            
        case "CHANGE_EDIT_STATUS":  
            return {...state,isEdit:!state.isEdit} 
        
        case "GET_EDIT_DATA":  
            return {...state,editItem:action.editObject} 
        
        case "EDIT":  
            // update du lieu len tren firebase 
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log("Da cap nhat du lieu " + JSON.stringify(action.getItem) + "thanh cong ");

            return {...state,editItem:{}} 
        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store; 