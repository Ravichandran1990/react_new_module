import { useCallback, useState } from "react";
import UseCallBackChildExmaple from './useCallBackChildExmaple';

const UseCallBackExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <h1>Use Call Back Example</h1>
      <UseCallBackChildExmaple todos={todos} addTodo={addTodo}/>
      Increment Count {count}
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default UseCallBackExample;
