import React,{ useState } from "react";
import Home from "./components/Home";
import Map from "./components/Map";
import './App.css';
//import AA404 from "./components/AA404";  padding: 50px;
import Card from "./components/Cards"
import image4 from "./images/4.jpg";
import { height } from "@mui/system";


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
  
   <section style={{ height : "300px", display: "flex", margin: "50px 50px"}}>
     <img src={image4} style={{borderRadius:"20px"}}/>
   <p style={{fontSize: "15px", margin: "50px", fontStyle: "arial", alignItems:"center"}} >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
   </p>
   </section>
   <section style={{ height : "300px", display: "flex", margin: "50px 50px"}}>
   <p style={{fontSize: "15px", margin: "50px", fontStyle: "arial", alignItems:"center"}} >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
   </p>
     <img src={image4} style={{borderRadius:"20px"}}/>
  
   </section>

   <section style={{ height : "300px", display: "flex", margin: "50px 50px"}}>
     <img src={image4} style={{borderRadius:"20px"}}/>
   <p style={{fontSize: "15px", margin: "50px", fontStyle: "arial", alignItems:"center"}} >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
   </p>
   </section>

   <section style={{ height:"100px", display: "flex", width: "40%", margin:"50px auto",justifyContent: "space-between"}}>
     <div>
     <img src={image4} style={{borderRadius: "50%", width: "100px", height:"100px"}}/>
     <p style={{textAlign:"center",margin:"10px"}}><b>Neel Hero</b></p>
     </div>
     <div>
     <img src={image4} style={{borderRadius: "50%", width: "100px", height:"100px"}}/>
     <p style={{textAlign:"center",margin:"10px"}}><b>Neel Hero</b></p>
     </div>
     <div>
     <img src={image4} style={{borderRadius: "50%", width: "100px", height:"100px"}}/>
     <p style={{textAlign:"center",margin:"10px"}}><b>Neel Hero</b></p>
     </div>
   </section>

    <h1 style={{width: "85%", margin: "auto"}}>Grab the deals</h1>
    <div style={{display:"flex",flexWrap: "wrap",width: "100%",justifyContent: 'center'}}>
    {data.map(() => {
    return(
    <Card/>
    )})}
    </div>
    <h1 style={{width: "85%", margin: "auto"}}>Products</h1>
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