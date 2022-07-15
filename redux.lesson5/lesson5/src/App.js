import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './pages/mainPage.js/MainPage';
import UserPage from './pages/usersPage/UserPage';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index  element={<MainPage/>}/>
                <Route path="/usersPage" element={<UserPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;