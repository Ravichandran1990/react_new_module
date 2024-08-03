import React from "react";
import axios from "axios";
class PersonAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }
    changeInputValue = (event) => {
        this.setState({name: event.target.value})
    }
    handleSubmit= (event) => {
        event.preventDefault();
        const obj = {
            name: this.state.name
        }
        axios.post('https://jsonplaceholder.typicode.com/users', obj).then((res) => {
            console.log("User Add data "+res);
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter Name</p>
                    <input type="text" name="name" onChange={this.changeInputValue} />
                    <button type="submit">Click</button>
                </form>
            </div>
        )
    }
}
export default PersonAdd;