import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './pages/createUser/CreateUser';
import PostPage from './pages/postPage/PostPage';


function App() {
  return (
    <div className="container pt-5">
    <CreateUser/>

    --------------
    <PostPage/>
      
    </div>
  );
}

export default App;
