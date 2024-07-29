import { useContext, useEffect, useState, useMemo, } from 'react';
import Form from './Form';
import { UserContext } from '../context/usercontext';
import useFetch from '../api/useFetch';

function Garage(props) {
    const cars = useContext(UserContext);
    const [count, setCount] = useState(0);
    const [data, setData] = useFetch("https://jsonplaceholder.typicode.com/todos");
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const addTodo = () => {
      setData((t) => [...t, {title: "New Todo"}]);
    };
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); 
    const increment = () => {
        setCount((c) => c + 1);
      };
    return (
      <>
      <div>
        <h2>My Todos</h2>
        {data?.map((todo, index) => {
          return <p key={index}>{todo.title}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }
        {cars.length === 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }
        {
            cars.map((data, index) => <h5 key={index}>{data}</h5>)
        }

        <Form name="dummy"/>
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        <h2>Expensive Calculation</h2>
        {calculation}
      </>
    );
  }

  
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default Garage;