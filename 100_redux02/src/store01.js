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
 var store1 = redux.createStore(reducer1);
 store1.subscribe(() => {
   var str = JSON.stringify(store1.getState());
   
   console.log(str);
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
 
export default store1 ; 