import React from 'react';

import '../App.css';
import {Registration} from "../features/auth/ui/Registration";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Login} from "../features/auth/ui/Login";
import {AllPets} from "../features/allPets/ui/allPets";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={"/"} element={<div>Hello</div>} />
                    <Route path={"/registration"} element={<Registration/>} />
                    <Route path={"/login"} element={<Login/>} />
                    <Route path={"/allpets"} element={<AllPets/>} />
                </Routes>

                <div ><NavLink  to="/registration">Registration</NavLink></div>
                <div ><NavLink  to="/login">Login</NavLink></div>
                <div ><NavLink  to="/allpets">allpets</NavLink></div>

            </div>
        </BrowserRouter>
    );
}

export default App;
