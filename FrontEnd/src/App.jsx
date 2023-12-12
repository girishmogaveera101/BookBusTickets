import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Help from "./components/help";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import BookTickets from "./components/BookTickets";
function App(){
  return(
    <BrowserRouter>
      <br/>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/BookTickets" element={<BookTickets/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;