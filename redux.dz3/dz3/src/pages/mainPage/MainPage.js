import React from "react";
import { connect } from "react-redux";
import {addInputAction , addNumAction} from "../../redux/actions/actions";

class MainPage extends React.Component {
    constructor (props) {
        super (props)
        this.createInputNum = this.createInputNum.bind(this)
    }

    createInputNum(e) {
        const data ={
            value: e.target.value,
            name: e.target.name
        }
        this.props.addInputAction(data)
    }

    addNum () {
        this.props.addNumAction(this.props.data.name)
        

    }

    render() {
        return (
            <div>
                <input
                name="name"
                type= "number"
                onChange={this.createInputNum}

                />

                <button onClick={this.addNum}> plus number</button>

            </div>
        )
    }
}

const mapStateToProps =state =>{
    return{
        // data: state.input.data
    }
}
const mapDispatchToProps = {
    addInputAction,
    addNumAction
    
   
}


export default connect ( mapStateToProps, mapDispatchToProps)( MainPage);