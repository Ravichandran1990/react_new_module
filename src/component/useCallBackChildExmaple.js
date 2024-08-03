import { memo } from "react";
const UseCallBackChildExmaple = ({ todos, addTodo }) => {
  return (
    <>
      <h1>Use Call Back Child Example</h1>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(UseCallBackChildExmaple);
