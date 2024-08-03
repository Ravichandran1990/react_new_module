import { useContext } from "react";
import Garage from "./Garage";
import GetContextMultiProvider from './GetContextMultiProvider';

import { UserContext, ProductContext } from "../context/usercontext";
function Car(props) {
    
    const cars = ['BMW', 'INOVA', 'SWIFT', 'Innova'];
    const products = ['travel', 'health', 'Medical'];
    const btnClick = (a) => {
        console.log(a.type);
    };
    return  (
        <UserContext.Provider value={cars}>
            <h3>{props.name}</h3>
            <button onClick={(event) => btnClick(event)}>Click Here</button>
            <ProductContext.Provider value={products} >
                <GetContextMultiProvider />
            </ProductContext.Provider>
            {/* <Garage /> */}
        </UserContext.Provider>
    )
   
}
export default Car;