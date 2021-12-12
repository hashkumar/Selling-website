import React from "react";
import "./App.css";
import { Router,BrowserRouter,Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const App = () => {
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<LandingPage />}/>
</Routes>
</BrowserRouter>
</>
}

export default App