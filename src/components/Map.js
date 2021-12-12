import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import image1 from "../images/1.jpg";
import image2 from "../images/2.webp";
import image3 from "../images/3.webp";
import image4 from "../images/4.webp";
import "../App.css";
import zIndex from '@mui/material/styles/zIndex';



const Map = () => {

 const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath: image1 ,
    },
    {
      label: 'Bird',
      imgPath: image2,
    },
    {
      label: 'Bali, Indonesia',
      imgPath:image3,
    },
    {
      label: 'Goč, Serbia',
      imgPath:image4,
    },
  ];
 
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
  
    return (
   
   <Box sx={{maxWidth: '100%', flexGrow: 1 ,position: 'relative'}}>
     
     <div  style={{display: "flex"}}>
     <Button size="small" onClick={handleBack}
          style={{
        minHeight: "60px",
        minWidth: "60px",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        zIndex: "1"
        // display: "none"
        }} 
          disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
      
          </Button>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      > 
      
     

        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box className="Slider"
                component="img"
                sx={{
                  height: 500,
                  // backGroundSize: '300px 200px',
                  minWidth: '100%',
                  objectFit: 'cover',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
          

          <Button
          style={{
            minHeight: "60px",
            minWidth: "60px",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            right: "0%",
            zIndex: "1"
            }} 
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >    
     
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
         </div>

    </Box>
      
    )      
}

export default Map