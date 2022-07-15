import { React } from "react";
import {  useDispatch, useSelector } from "react-redux";

const UsersPage =() => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch()
 
    // const deleteUser =(user) =>{
    //     dispatch({type: "DELETE_USER" })

    // }
//    const connect = useConnect() 
    // const del = dispatch =({ 
    //    const deleteUser= key => dispatch(deleteUser(key))
    // })
    

    // const deleteUser = () => {
    //     // console.log(user.name);
    //     dispatch ( {type: "DELETE_USER" , payload:user.name})
    // }
     
   
    // const deleteUser = () => {
    //     // console.log(user.name);
    //     dispatch ( {type: "DELETE_USER", payload:users.name })
    // }

   
    

    return ( 
        <div>
            <ul>

            { 
                users.length > 0
                ?
            users.map((user ,key) =><li key={key}>{user} <button onClick={deleteUser()}>clear</button></li>)
                :
                <li>not users</li>
               
                }
                 
            

            </ul>
            
        </div>
    );



};


export default (UsersPage);