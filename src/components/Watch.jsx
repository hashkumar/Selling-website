import React from "react";
import image4 from "../images/4.jpg";
import "./Watch.css";

export default function Watch() {

   const data =[
       {i : "1",},
       {i : "2",},
       {i : "3",},
       {i : "4",},
       {i : "5",},
       {i : "6",},
       {i : "7",},
       {i : "8",},
       {i : "9",},
   ]
    return(
        <>
    <section style={{width: "90%",margin:"auto"}}>
    
    <section className="figure">
    <img src={image4} style={{width:"80%",margin:"auto"}}/>
  
    <div className="discription" >
    <h2>discription</h2>
    <p> This impressive paella is a perfect party dish and a fun meal to cook
   together with your guests. Add 1 cup of frozen peas along with the mussels</p>
   <h3>Containts</h3>
   <p>This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels</p>
    </div>
    </section>
    <h2 style={{width:"100%",textAlign:"center"}}>Episodes</h2>
    <div style={{display: "flex", flexWrap: "wrap",justifyContent:"center",margin:"auto"}}>
    {data.map((value) => {
        return(
            <>
            <div style={{display: "flex", flexDirection: "column",margin:"20px"}}>
            <img src={image4} style={{maxWidth:"300px"}}/>
            <b>episode{value.i}</b>
            </div>
            </>
        )
        })}
        </div>

    </section>
    </>
    )
}
