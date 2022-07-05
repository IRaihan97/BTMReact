import React from 'react'
import './servicecard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const ServiceCard = ({title, content}) => {
  return (
    <AnimationOnScroll 
      animateIn='animate__flipInX'
      animateOnce='true'>
    <Card className= "BTM__ServiceCard" sx={{borderRadius: 6, boxShadow: 6, backgroundColor: "#1E2B57", margin: "10px"}}>
      <CardContent>
        <Typography variant="h5" component="div" style={{textAlign:"center", color: "#82CAFF"}}>
          {title}
        </Typography>
        <Typography sx={{ m: 1 }} color="white" style={{textAlign:"center", textJustify: "inter-word", verticalAlign:"center"}}>
          {content}
        </Typography>
      </CardContent>
    </Card>
    </AnimationOnScroll>
  )
}

export default ServiceCard