import { useState } from "react"

function Form(props) {
    const [name, setName] = useState('');
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(props.name);
    }
    return <>
        <form>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <button onClick={formSubmit}>Submit</button>
        </form>
    </>
}

export default Form;