import './App.css';
// import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';
import { useDisptch } from 'react-redux';
import UsersPage from './pages/usersPage/UsersPage';


function App() {

  // const dispatch = useDispatch();

  // const title = useSelector(state => state.title);

  // const renameText = () => {
  //   dispatch( {type: "CHANGE_TITLE" } )
  // }

  return (
    <div>
    
      <MainPage/>
      ---------------------------------------
      <UsersPage/>

      {/* <AboutPage/> */}

      {/* <button onClick={renameText}>change text</button>
      <button onClick={renameText}>clear text</button> */}

    </div>
  );
}

export default App;
