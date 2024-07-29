import Garage from "./Garage";
import { UserContext } from "../context/usercontext";
function Car(props) {
    const cars = ['BMW', 'INOVA', 'SWIFT'];
    const btnClick = (a) => {
        console.log(a.type);
    };
    return  (
        <UserContext.Provider value={cars}>
            <h3>{props.name}</h3>
            <button onClick={(event) => btnClick(event)}>Click Here</button>
            <Garage />
        </UserContext.Provider>
    )
   
}
export default Car;