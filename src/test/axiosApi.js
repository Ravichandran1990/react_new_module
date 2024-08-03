import axios from "axios";
import React from "react";
import UserAdd from "./axiosPost2";
class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.status);
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <>
        {this.state.persons.map((data) => {
          return <div key={data.id}>{data.name}</div>;
        })}
         <UserAdd />
      </>
    );
  }
}

export default PersonList;
