
import React from 'react';
import PersonList from './axiosApi';

class Test1 extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            name: 'Ravichandran',
            lname: "Mohan"
        }        
    }
    render() {
       
        console.log(this.state);
        return (
            <>
            Testing Class Component {this.props.passData}
            <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
            <PersonList />
           
            </>
        )
    }
        
}

export default Test1;