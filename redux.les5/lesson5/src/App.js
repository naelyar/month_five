import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Menu from './components/menu/Menu';
// import {Button} from "react-bootstrap"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';


function App() {

    return (
        <div>
           {/* <Button variant="primary">Primary</Button>  */} 
        
         <BrowserRouter>
        
            <Routes>
                <Route index  element={<MainPage/>}/>
                <Route path="/usersPage" element={<UsersPage/>}/>
            </Routes>
        </BrowserRouter>
      
        {/* <div className='container'>             <Menu/>
       </div> */}
       </div>



      

    )
}

export default App;