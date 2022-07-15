import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const MainPage = () =>{
    // const title= useSelector(state => state.title);

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()


    const [user , setUser] = useState({
        name:" "
    });

    const onChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
            
        })
    }
    const addUser = () => {
        // console.log(user.name);
        dispatch ( {type: "ADD_USER" , payload:user.name})
    }
    // const clearUser =(clear) =>{     
    //     dispatch ({type: "DELETE_USER", payload:clear.name })
    // }
    //  const clearUser =(user) =>{
    //     dispatch ({type: "DELETE_USER", payload:user.name })
    // }

    
    return (
        <div>
            mainPage
            {/* {console.log(users)} */}
            <input 
            type="text" 
            onChange={onChangeInput} 
            name="name"
            value ={user.name}
            />

            <button onClick={addUser}>add user</button>

        </div>
    );
};

export default MainPage;

