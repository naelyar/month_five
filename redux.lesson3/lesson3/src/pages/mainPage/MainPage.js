import React from "react";
import {connect} from "react-redux";
import {changeInput} from "../../redux/actions/actions"
import {addUserAction ,clearDataAction} from "../../redux/actions/actions"

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.changeInputFunc = this.changeInputFunc.bind(this)
        this.addUserFunc = this.addUserFunc.bind(this)

    }

    changeInputFunc (e) {
        const data = {
            value: e.target.value,
            name: e.target.name
        }

        this.props.changeInput(data)
    }

    addUserFunc() {
        this.props.addUserAction(this.props.data.name)
        const data = {
            name:"name"
        }
        this.props.clearDataAction(data)

    }

    render() {
        return (
            <div>
                {/* {console.log(this.props.data.name)} */}
                <input 
                type="text"
                name="name"
                value={this.props.data.name}
                onChange={this.changeInputFunc}

                />
                <button onClick={this.addUserFunc}>add user</button>

                <ul>
                    {this.props.users.map(user=> <li>{user}</li>)}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.input.data,
        users: state.users.users

    }
}


const mapDispatchToProps = {
    changeInput,
    addUserAction,
    clearDataAction
}

export default connect(mapStateToProps, mapDispatchToProps) (MainPage);