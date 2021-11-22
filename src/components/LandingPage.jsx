import React, { useState } from "react";
import Home from "./Home";
import Map from "./Map";
import '../App.css';
import Card from "./Cards"
import Portion from "./Portion";
import image4 from "../images/4.jpg";
import Footer from "./Footer";
import { Box } from "@mui/material";

function LandingPage() {

  const data = [
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
  ]

  const data1 = [
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
    { name: "ehllo", },
  ]

  const [state, setState] = useState(false);

  const Click = () => {
    setState(!state);
  }

  return (
    <>


      {state == false ? (<Box className='bg-dark' style={{ color: "white" }} >
      <button onClick={Click} className="btn bg-dark" style={{ color: "white",width:"100px",height: "64px", float: 'right'}}>Dark Mode</button>
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

        <h1 className="Grab" style={{ width: "85%", margin: "auto" }}>Grab the deals</h1>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>
          {data.map(() => {
            return (
              <Card />
            )
          })}
        </div>
        <h1 className="Products" style={{ width: "85%", margin: "auto" }}>Products</h1>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>
          {data1.map(() => {
            return (
              <Card />
            )
          })}
        </div>
        <Footer />
      </Box>) : <Box>

        
      <button onClick={Click} className="btn bg-primary" style={{ color: "white",width:"100px",height: "64px", float: 'right'}}>Light Mode</button>
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

        <h1 className="Grab" style={{ width: "85%", margin: "auto" }}>Grab the deals</h1>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>
          {data.map(() => {
            return (
              <Card />
            )
          })}
        </div>
        <h1 className="Products" style={{ width: "85%", margin: "auto" }}>Products</h1>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>
          {data1.map(() => {
            return (
              <Card />
            )
          })}
        </div>
        <Footer />
      </Box> }
    </>

  );
}


export default LandingPage