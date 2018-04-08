import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';
var redux = require('redux');

var oldState = {
  num:["man hinh","chuot","ban phim"],
  editStatus : true
}
 var reducer1 = (state=oldState, action) => {
   switch (action.type) {
     case "CHANGE_EDIT_STATUS":
       return {...state,editStatus:!state.editStatus}          
      
     case "ADD_NEW":
       return {...state,num:[...state.num,action.newItem]}       

     case "DELETE":
       return {...state,num:state.num.filter((value,i) => i !== action.number  )}       

   
     
   
     default:
       return state; 
    }
  
 }

const allReducers = redux.combineReducers({
    num:numReducer,
    editStatus:editStatusReducer
})

 var store1 = redux.createStore(allReducers); 
 store1.subscribe(() => {
   console.log(JSON.stringify(store1.getState())); 
 })

 store1.dispatch({type:"CHANGE_EDIT_STATUS"})
 store1.dispatch({
   type:"ADD_NEW",
   newItem:"Tai Nghe "
 })

 store1.dispatch({
   type:"DELETE",
   number:0
 })
 export default store1; 
 