export const  reducer =( state = { users:[]} ,action ={}) =>{

    if(action.type ==="CHANGE_TITLE") {
   
    return {
        ...state.title = " i am new title"
    }
    } 
    else if(action.type ==="CLEAR_TITLE"){
        return {
            ...state , title: " "
        }
    
    }
    else if (action.type ==="ADD_USER") {
        // console.log(action);

        return {
            ...state, users: [...state.users , action.payload]
        }
    }
    // else if ( action.type ==="DELETE_USER")  {
    //     return{
            
        
    //             ...state,
    //             users:state.users.filter((user , i)=> i !== action.payload)
            
    //     }

    // }
    // else if ( action.type ==="DELETE_USER")
    // return { 
    //     ...state,
    //     clear:state,users: state.clear.filter((clear ,name) => (name !==action.payload)) 
    // }
 
   
    
    
    
    else {
        return state
    }


}