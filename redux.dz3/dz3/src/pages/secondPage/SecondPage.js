import React from "react";


class SecondPage extends React.Component {
    constructor (props) {
        super (props)
    }
    render() {
        return (
            <div>
                <ul>
                {this.props.numbers.map(number=> <li>{number}</li>)}

                </ul>
            </div>
        )
    }
}


export default SecondPage;


