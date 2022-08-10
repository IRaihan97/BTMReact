import React from 'react'
import './expertcard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActions } from '@mui/material'
import Typography from '@mui/material/Typography'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'


const ExpertCard = ({role, name, description, skills, expertPhoto, profile, lin, expert}) => {
  return (
    <AnimationOnScroll 
      animateIn='animate__fadeIn'
      animateOnce='true'>
      <Card className= "BTM__ExpertCard" sx={{borderRadius: 6, backgroundColor: "#031B34"}} variant="outlined">
        <div className='BTM__Expert_Photo'>
          <img className="Expert_Photo" src={expertPhoto}/>
        </div>
        <Typography className="expert__name" variant="h5" component="div" style={{textAlign:"center", color: "white", marginTop: "0.5rem"}}>
          <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'> {role} </AnimationOnScroll>
        </Typography>
        <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'> 
          <CardContent className='Expert__content'>
            <Typography className="expert__name" variant="h5" component="div" style={{textAlign:"left", color: "#82CAFF"}}>
              <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce='true'> {name} </AnimationOnScroll>
            </Typography>
            <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true' delay={500}>
            <Typography className="expert__name" variant="h6" component="div" style={{textAlign:"left", color: "white"}}>
              Industry Experience
            </Typography>
            <Typography color="#011C46" style={{textAlign:"left", color: "white"}}>
              {description}
            </Typography>
            <Typography className="expert__name" variant="h6" component="div" style={{textAlign:"left", color: "white"}}>
              Areas of Expertise
            </Typography>
            <Typography color="#011C46" style={{textAlign:"left", color: "white"}}>
              {skills}
            </Typography>
            </AnimationOnScroll>
          </CardContent>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce='true'>
          <CardActions className='expert__actions' sx={{ml: 1/2,
          justifyContent: "flex-end"}}>
            {role
              ?<a href={profile} target="_blank" rel="noreferrer noopener"><button className='expert__profile'> Academic Profile </button></a>
              :<a href={profile} target="_blank" rel="noreferrer noopener"> <button className="expert__button_git"></button></a>}
            <a href={lin} target="_blank" rel="noreferrer noopener"><button className="expert__button_lin"></button></a>
          </CardActions>
        </AnimationOnScroll>
      </Card>
    </AnimationOnScroll>
  )
}

export default ExpertCard