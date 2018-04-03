
const editStatusInitialState = true; 
const editStatusReducer = (state = editStatusInitialState, action) => {
   switch (action.type) {
       case "CHANGE_EDIT_STATUS":
        return !state ;  
      
       default:
           return state
   }
}
export default editStatusReducer; 