import React,{ useState } from "react";
import Home from "./Home";
import Map from "./Map";
import '../App.css';
import Portion from "./Portion";
import image4 from "../images/4.jpg";
import Footer from "./Footer";
import { Box } from "@mui/material";
import Cards from './Cards';


export default function LandingPage() {
  

  const [state, setState] = useState(false);
  

  const Click = () => {
    setState(!state);
  }

  return (
    <>


      {state == false ? (<Box className='bg-dark' style={{ color: "white" }} >
      <button onClick={Click} className="btn Theme-x bg-dark" style={{ color: "white",width:"100px", float: 'right'}}>Dark Mode</button>
        <Home />
        <Map />
        <Portion />
        <section className="portion2" style={{ height: "max-content", display: "flex", width: "40%", margin: "100px auto", justifyContent: "space-between" }}>
          <div className="subportion">
            <img src={image4} className="picture2" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
            <p style={{ textAlign: "center", margin: "10px" }}><b>Neel Hero</b></p>
          </div>
          <div className="subportion">
            <img src={image4} className="picture2" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
            <p style={{ textAlign: "center", margin: "10px" }}><b>Neel Hero</b></p>
          </div>
          <div className="subportion">
            <img src={image4} className="picture2" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
            <p style={{ textAlign: "center", margin: "10px" }}><b>Neel Hero</b></p>
          </div>
        </section>
        <Cards />
        <Footer />
      </Box>) : <Box>
        
      <button onClick={Click} className="btn Theme-x btn-primary" style={{ color: "white",width:"100px", float: 'right'}}>Light Mode</button>
        <Home />
        <Map />
        <Portion />
        <section className="portion2" style={{ height: "max-content", display: "flex", width: "40%", margin: "100px auto", justifyContent: "space-between" }}>
          <div className="subportion">
            <img src={image4} className="picture2" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
            <p style={{ textAlign: "center", margin: "10px" }}><b>Neel Hero</b></p>
          </div>
          <div className="subportion">
            <img src={image4} className="picture2" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
            <p style={{ textAlign: "center", margin: "10px" }}><b>Neel Hero</b></p>
          </div>
          <div className="subportion">
            <img src={image4} className="picture2" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
            <p style={{ textAlign: "center", margin: "10px" }}><b>Neel Hero</b></p>
          </div>
        </section>

     
        <Cards />
        <Footer />
      </Box> }
    </>

  );
}


