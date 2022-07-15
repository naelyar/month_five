import React from "react";
import {  useDispatch, useSelector} from "react-redux";
import {changeTitle , clearText , getTitleFromInput, inputData}  from "../../store/titleSlice";

function MainPage ()  {

    const title =useSelector (state => state.titleReducer.title);
    const input =useSelector (state => state.titleReducer.input);

    const dispatch = useDispatch();

    const changeTextFunc =() =>{
        dispatch (changeTitle())
    }
    const clearTextFunc =() =>{
        dispatch (clearText())
    }

    const changeInput = (e) => {
        dispatch(inputData(e.target.value))
    }

    const addNewtext =() => {
        dispatch(getTitleFromInput(input))
    }



    return (
        <div>

            <h1>mainPage - {title}</h1>
        <div>
            <input
                type="text"
                onChange={changeInput}
                value={input}

            />
            <button onClick={addNewtext}>add</button>
            </div>
             
            

         <button onClick={changeTextFunc} >change text</button>
            <button onClick={clearTextFunc}>change text</button>

        </div>
    )
}


export default MainPage;