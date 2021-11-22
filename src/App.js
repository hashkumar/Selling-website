import React from "react";
import './App.css';
import LandingPage from "./components/LandingPage";
import Watch from "./components/Watch";
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/Selling-website" exact element={<LandingPage />} />
        <Route path="/Selling-website/Watch" element={<Watch />} />
        </Routes>
    </BrowserRouter>    
    </>
  );

}


export default App