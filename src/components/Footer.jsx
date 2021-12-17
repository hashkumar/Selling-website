import React,{useState} from "react";
import "../App.css";

const Footer = () =>{

  const Dashboard = [
    {
        Name : "Support",
        address : "Help",
        gmail: "Community",
        phoneno : "Advisories",
    },

    {
        Name : "Dashboard",
        subname : "Home",
        subname1 : "My Profile",
        subname2: "Message",
    },

    {
     Name : "Get Involved",
     subname : "Be a member",
     subname1 : "Company",
     subname2: "About",
 },
 {
     Name : "More",
     subname : "FAQ",
     subname1: "Blog",
     subname : "Gallery",
 },
 {
     Name : "Give Back",
     subname : "Donate",
     subname1 : "Sponsor",
 },

]

    return(
      <section className="containerF bg-dark" style={{color: "white", padding: "5%", height: "max-content"}}>


             <h2 style={{textAlign: "center", padding: "20px"}}>Get Connected with us today!</h2>
           
             <div className="boxF" style={{display: "flex", margin: "20px 6%" , justifyContent: "center"}}>
             <input className="form-control" type="text" placeholder="Enter your email"/>
             <button  className= "btn btn-danger w-80 RegisterNow" style={{margin : "20px 20px"}}>Register Now!</button>

        </div>         

        <div className="boxesF1" style={{ width: "100%"}}>
       {Dashboard.map((value,index) => {
           return(
               <div className="boxesF" key={index} style={{margin: "50px auto"}}>
                   <h4 style={{margin: "20px auto"}}><b>{value.Name}</b></h4>
                   <p href="#">{value.address}</p>
                   <p href="#">{value.gmail}</p>
                   <p>{value.phoneno}</p>
                   <p>{value.subname}</p>
                   <p>{value.subname1}</p>
                   <p>{value.subname2}</p>
                </div>   
           )
       })

       }</div>
      
     </section>
    )
}
export default Footer