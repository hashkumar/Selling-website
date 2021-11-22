import React,{ useState, } from "react";
import Home from "./components/Home";
import Map from "./components/Map";
import './App.css';
//import AA404 from "./components/AA404";  padding: 50px;
import Card from "./components/Cards"
import Portion from "./components/Portion";
import image4 from "./images/4.jpg";
import Media from "react-media";


function App() {

  const data = [
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
  ]

  const data1 =[
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
    {name: "ehllo",},
  ]

  return (
    <>
    <Home />
    <Map />
    <Portion />



   <section className="portion2" style={{ height:"max-content", display: "flex", width: "40%", margin:"100px auto",justifyContent: "space-between"}}>
     <div className="subportion">
     <img src={image4} className="picture2" style={{borderRadius: "50%", width: "100px", height:"100px"}}/>
     <p style={{textAlign:"center",margin:"10px"}}><b>Neel Hero</b></p>
     </div>
     <div className="subportion">
     <img src={image4} className="picture2" style={{borderRadius: "50%", width: "100px", height:"100px"}}/>
     <p style={{textAlign:"center",margin:"10px"}}><b>Neel Hero</b></p>
     </div>
     <div className="subportion">
     <img src={image4} className="picture2" style={{borderRadius: "50%", width: "100px", height:"100px"}}/>
     <p style={{textAlign:"center",margin:"10px"}}><b>Neel Hero</b></p>
     </div>
   </section>

    <h1  className="Grab" style={{width: "85%", margin: "auto" }}>Grab the deals</h1>
    <div style={{display:"flex",flexWrap: "wrap",width: "100%",justifyContent: 'center'}}>
    {data.map(() => {
    return(
    <Card/>
    )})}
    </div>
    <h1 className="Products" style={{width: "85%", margin: "auto" }}>Products</h1>
    <div style={{display:"flex",flexWrap: "wrap",width: "100%",justifyContent: 'center'}}>
    {data1.map(() => {
    return(
    <Card/>
    )})}
    </div>
    </>

  );
}


export default App