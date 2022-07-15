import React from "react";
import {Form , Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import { addData } from "../../store/dataSlice";
import { createUser } from "../../store/fetchSlice";

function CreateUser () {
    const dispatch = useDispatch()
    const data = useSelector(state =>state.dataReducer.data)

    const changeInput =(e) => {
        const data ={
            name: e.target.name,
            value: e.target.value,

        }
        dispatch(addData(data))


    }
    const submitData = () => {
        dispatch(createUser()) 
    }
    return(
        <div>
            <h1 className="mb-3">Create user</h1>

            <div className="row">
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control 
                        type="email" 
                        placeholder="name"
                        name="name" 
                        onChange={changeInput}
                        />
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control type="text" placeholder="username" 
                            name="username" 
                            onChange={changeInput}
                        />
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control type="text" placeholder="email"
                        name="email" 
                        onChange={changeInput} />
                    </Form.Group>
                </div>
                <div className="col-3">
                <Button variant="primary" className="mb-3 w-100" onClick = {submitData} >createUser</Button>             
                   </div>
               
              
            </div>
        </div>
    )
}

export default CreateUser;