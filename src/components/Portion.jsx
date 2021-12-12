import React,{useState} from "react";
import image4 from "../images/3.webp";
import Media from "react-media"
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Portion = () => {


 // const  data = [
  //  ]
return(
    <>
 
    <section className="portion" data-aos="zoom-in"   data-aos-delay="50" style={{ height: "max-content", display: "flex",justifyContent: "space-between", margin: "100px auto", width: "75%"}}>
     <img src={image4} className="picture" style={{borderRadius:"5px" }}/>
     <p style={{fontSize: "15px",  fontStyle: "arial", alignItems:"center",Width: "40rem", margin: "auto" }} className="paragraph" >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          
   </p>
   </section>
   
   <section className="fix-box"  data-aos="zoom-in"   data-aos-delay="50"   id="fix-box1" style={{height: "max-content", display: "flex",justifyContent: "space-between", margin: "100px auto", width: "75%"}}>
   <p style={{fontSize: "15px",  fontStyle: "arial", alignItems:"center",Width: "40rem", margin: "auto" }} className="paragraph" >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          
   </p>
   <img src={image4}  className="picture" style={{borderRadius:"5px"}}/>
   </section>
  

   <section className="portion"   data-aos="zoom-in"    data-aos-delay="50" style={{height: "max-content", display: "flex",justifyContent: "space-between", margin: "100px auto", width: "75%"}}>
   <img src={image4} className="picture" style={{borderRadius:"5px" }}/>
   <p style={{fontSize: "15px",  fontStyle: "arial", alignItems:"center",Width: "40rem", margin: "auto" }} className="paragraph" >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          
   </p>
   </section>


   </>

)
}

export default Portion;