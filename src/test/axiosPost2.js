import React from "react";
import axios from "axios";
class UserAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };    
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      name: this.state.name,
    };
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", obj);
    console.log(response);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>Last Name</p>
          <input
            type="text"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default UserAdd;
