import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction ,addNameAction } from "../../actions/actions";

const NumberPage =() =>{
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const name = useSelector(state => state.users.name)



    const createUser =() => {
        dispatch(createUserAction(name))

    }
    

    const changeInput =(e) =>{
        dispatch(addNameAction(e.target.value))

    }
    

    
    return( 
    <div>
    <div>
        <input 
        type="number"
        onChange={changeInput}
        value={name}

        
        />
        <button onClick={createUser}>create user</button>
    </div>
    <ul>
        <li>users:</li>
        {users.map((user, key ) =><li key={key}>{user} </li>)}
    </ul>
    </div>
    )
}

export default NumberPage