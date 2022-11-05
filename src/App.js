import React from "react";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import './App.css';
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import LoadData from "./components/LoadData";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="main-container">
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route path='/' element={<Login/>}/>
                            <Route path='/sign-up' element={<SignUp/>}/>
                            <Route path='/users' element={<LoadData/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
