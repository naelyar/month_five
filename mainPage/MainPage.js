// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createUserAction ,addNameAction} from "../../action/action";

// const MainPage =() =>{
//     const dispatch = useDispatch()
//     const users = useSelector(state => state.users.users)
//     const name = useSelector(state => state.users.name)
//     // const empty = useSelector(state => state.users)



//     const createUser =() => {
//         dispatch(createUserAction(name))
//         // dispatch(createUserAction(''))




//     }
//     // const emptyInput =()=> {
//     // }

//     const changeInput =(e) =>{
//         dispatch(addNameAction(e.target.value))
//         // dispatch(emptyInputAction()

//     }
//     // const clearUser =(user) =>{
//     //     dispatch(clearInputAction(user.id))
//     //     // dispatch(emptyInputAction()

//     // }

    
//     return( 
//     <div>
//     <div>
//         <input 
//         type="number"
//         onChange={changeInput}
//         value={name}

        
//         />
//         <button onClick={createUser}>create user</button>
//     </div>
//     <ul>
//         <li>users:</li>
//         {users.map((user, key ) =><li key={key}>{user} <button onClick={clearUser}> clear </button></li>)}
//     </ul>
//     </div>
//     )
// }

// export default MainPage