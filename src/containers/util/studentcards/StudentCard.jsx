import React from 'react'
import './studentcard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActions } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from 'react-scroll/modules/components/Button'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'


const StudentCard = ({title, description, skills, studentPhoto}) => {
  return (
    <AnimationOnScroll 
      animateIn='animate__fadeIn'
      animateOnce='true'>
      <Card className= "BTM__StudentCard" sx={{borderRadius: 6}} variant="outlined">
        <div className='BTM__Student_Photo'>
          <img className="Student_Photo" src={studentPhoto}></img>
        </div>
        <CardContent className='Student__content'>
          <Typography className="student__name" variant="h5" component="div" style={{textAlign:"left", color: "#82CAFF"}}>
            {title}
          </Typography>
          <Typography className="student__name" variant="h6" component="div" style={{textAlign:"left", color: "white"}}>
            Who Am I
          </Typography>
          <Typography color="#011C46" style={{textAlign:"left", color: "white"}}>
            {description}
          </Typography>
          <Typography className="student__name" variant="h6" component="div" style={{textAlign:"left", color: "white"}}>
            Skillset
          </Typography>
          <Typography color="#011C46" style={{textAlign:"left", color: "white"}}>
            {skills}
          </Typography>
        </CardContent>
        <CardActions sx={{ml: 1/2}}>
          <button className="student__button_git"></button>
          <button className="student__button_cv"></button>
          <button className="student__button_lin"></button>
        </CardActions>
      </Card>
    </AnimationOnScroll>
  )
}

export default StudentCard