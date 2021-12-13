import React,{useState} from 'react';
import Home from "./Home";
import Map from "./Map";
import '../App.css';
import Portion from "./Portion";
import Footer from "./Footer";
import { Box } from "@mui/material";
import Cards from "./Cards";




const LandingPage = () => {
 

  const [state, setState] = useState(false);

  const Click = () =>{
    setState(!state);
  }


 
  return (
    <>
    

      {state == false ? (<Box className='bg-dark' style={{ color: "white" }} >
      <p onClick={Click} className="Theme-x bg-dark" >Dark Mode</p>
        <Home className="Home"/>
      
        <Map />
        <Portion />
    
        <Cards />
        <Footer />
      </Box>) : <Box>
        
      <p onClick={Click} className="Theme-y bg-dark" >Lite Mode</p>
        <Home />
     
        <Map />
        <Portion />
        <Cards />
        <Footer />
      </Box> }

    </>

  );
}

export default LandingPage

