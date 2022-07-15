import './App.css';
// import {useDispatch ,useSelector} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { increment } from './store/countSlice';
import UsersPage from './pages/UsersPage';
function App() {

  // const dispatch = useDispatch();
  // const count = useSelector (state => state.countReducer);
  // const user = useSelector (state => state.users.usersReducer)

  // const incrementFunc =() =>{
  //   dispatch(increment())
  // }
  return (
    <div className="container">

  {/* //   <ul>
  //     <li>
  //       count:{count}
  //     </li>
  //     <li>
  //       name:{user.name}
  //     </li> <li>
  //       age:{user.age}
  //     </li> <li>
  //       count:{count}
  //     </li>
  //   </ul>

  //   <button onClick={incrementFunc}>up</button> */}


    <UsersPage/>
     
    </div>
  );
}

export default App;
