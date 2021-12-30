import React,{useState} from 'react';
import Home from "./Home";
import Map from "./Map";
import '../App.css';
import Portion from "./Portion";
import Footer from "./Footer";
import { Box } from "@mui/material";
import Cards from "./Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons';



const LandingPage = (props) => {
 

  const [state, setState] = useState(false);

  
  const Click = () =>{
    setState(!state);
  }

 
  return (
    <>
    {/* <Home data={Click}/> */}
      {state == false ? (<Box className='bg-dark' style={{ color: "white" }} >
       <p onClick={Click} className="Theme-x bg-dark" >Dark Mode {props.data}</p> 
      {/* <button className='btn btn-gradient btn-success m-2 text-white'><FontAwesomeIcon icon={faAirFreshener} className="m-1" color="white" />dark mode</button> */}
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

