import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import NumberPage from './pages/numberPage/NumberPage';

// import {sayHelloAction, clearHelloAction} from "./action/action";



function App() {
  const dispatch = useDispatch()

  // const title = useSelector(state => state.title)

  // const changeText = () => {
  //   dispatch(sayHelloAction("Naelya"))
  // }
  // const clearText =()=> {
  //   dispatch(clearHelloAction())
  
  // }

  return (
    <div>
    {/* ----------{title}---------

    <button onClick={changeText}> sayHello</button>
    <button onClick={clearText}> clearHello</button> */}

    <MainPage/>
    ---------------
    <NumberPage/>
    </div>
  );
}

export default App;
