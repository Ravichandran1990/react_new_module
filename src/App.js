
import './App.css';
import Car from './component/Car';
import AddPost from './features/addposts/AddPost';
import PostsList from './features/posts/PostsList';
import Test from './test/test';

function App() {
  const obj = {
    name: 'ravi',
    gender: 'Male'
  }
  return (
    <>
      <h1>App Component</h1>
      <Test testDataPass={obj} />
      {/* <Car name="BMW" /> */}
      {/* <AddPost /> */}
      {/* <PostsList /> */}
    </>
  );
}

export default App;
