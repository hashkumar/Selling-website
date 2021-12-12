import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image4 from "../images/3.webp";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Cards() {



  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  //export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const data1 = [
    { name: "harsh", },
    { name: "ayush", },
    { name: "amrita", },
  ]

  const data2 = [
    { name: "mihir", },
    { name: "aahana", },
    { name: "ankit", },
  ]

  const data3 = [
    { name: "aryan", },
    { name: "varrun", },
    { name: "raunit", },
  ]


  /*<h1 className="Products" style={{ width: "85%", margin: "auto" }}>Products</h1>
  <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>
    {data1.map(() => {
      return (
        <Card />
      )
    })}
  </div>*/

  const [searchTerm, setSearchterm] = useState('');

  return (
    <>




      <div className="Grabbox" style={{ display: "flex", width: "85%", margin: "50px auto" }}>

        <h1 className="Grab" style={{ width: "85%", margin: "auto" }}>Grab the deals</h1>

        <input
          className="form-control rounded"
          type='search'
          placeholder='search...'
          onChange={(event) => { setSearchterm(event.target.value) }}
        />
      </div>
     

            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>



              {data1.filter((val) => {
                if (searchTerm == "") {
                  return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((userInfo) => {
                return (
                  <>
                    <Card data-aos="zoom-in"   data-aos-delay="50" sx={{ maxWidth: 320, margin: "30px", display: "flex", flexWrap: "wrap",margin: "50px" }}>
                   
                      <CardMedia
                        component="img"
                        height="194"

                        image={image4}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <b>{userInfo.name}</b>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a fun meal to cook
                          together with your guests. Add 1 cup of frozen peas along with the mussels
                        </Typography>

                        <NavLink to="/Selling-website/Watch">
                          <button className="btn btn-gradient btn-primary" style={{ margin: "10px 0px", width: "50%" , position: "relative", right: "-50%" }}>Watch Now!</button>
                        </NavLink>
                      </CardContent>

                    </Card>

                  </>
                )
              })}          </div>



   

            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: 'center' }}>

              {data2.filter((val) => {
                if (searchTerm == "") {
                  return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((userInfo) => {
                return (
                  <>
                    <Card  data-aos="zoom-in"   data-aos-delay="50" sx={{ maxWidth: 320, margin: "30px", display: "flex", flexWrap: "wrap" ,margin: "50px"}}>
                      {/* <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                            H
                          </Avatar>
                        }

                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      /> */}
                      <CardMedia
                        component="img"
                        height="194"

                        image={image4}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <b>{userInfo.name}</b>
                        <Typography variant="body2" color="text.secondary">
                          This impressive paella is a perfect party dish and a fun meal to cook
                          together with your guests. Add 1 cup of frozen peas along with the mussels
                        </Typography>

                        <NavLink to="/Selling-website/Watch">
                          <button className="btn btn-gradient btn-primary" style={{ margin: "10px 0px", width: "50%", position: "relative", right: "-50%"}}>Watch Now!</button>
                        </NavLink>
                      </CardContent>

                    </Card>

                  </>
                )
              })} </div>
         

    </>


  );
}

export default Cards