import React,{useState} from "react";
import "./App.css";
import { Router,BrowserRouter,Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import Home from "./src/components/Home";

function App(){
// const [state, setState] = useState(false);

  
// const Click = () =>{
//   setState(!state);
// }


return (
  <>
  <BrowserRouter>
  {/* <Home data={Click} /> */}
<Routes>
    <Route path="/" element={<LandingPage />}/>
</Routes>
</BrowserRouter>
</>
);
}

export default App