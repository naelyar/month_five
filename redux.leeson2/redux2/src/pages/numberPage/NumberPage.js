import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNumberAction , addNumberAction} from "../../action/action";

const NumberPage =() =>{
    const dispatch = useDispatch()
    const number= useSelector(state => state.numbers.number)

    const num = useSelector(state => state.numbers.num)



    const createNum =(num) => {
        dispatch(createNumberAction(num))

    }
    

    const changeInput =(e) =>{
        dispatch(addNumberAction(e.target.value))

    }
    

    
    return( 
    <div>
    <div>
        <input 
        type="number"
        onChange={changeInput}
        value={num}

        
        />
        <button onClick={createNum}>get +10</button>
    </div>
    <ul>
        <li>users:</li>
        {numbers.map((number, key ) =><li key={key}>{number} </li>)}
    </ul>
    </div>
    )
}

export default NumberPage;