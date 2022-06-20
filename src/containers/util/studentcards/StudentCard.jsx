import React from 'react'
import './studentcard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActions } from '@mui/material'
import Typography from '@mui/material/Typography'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'


const StudentCard = ({role, name, description, skills, studentPhoto, profile, lin, expert}) => {
  return (
    <AnimationOnScroll 
      animateIn='animate__fadeIn'
      animateOnce='true'>
      <Card className= "BTM__StudentCard" sx={{borderRadius: 6, backgroundColor: "#031B34"}} variant="outlined">
        <div className='BTM__Student_Photo'>
          <img className="Student_Photo" src={studentPhoto}/>
        </div>
        <Typography className="student__name" variant="h5" component="div" style={{textAlign:"center", color: "white", marginTop: "0.5rem"}}>
            {role}
          </Typography>
        <CardContent className='Student__content'>
          <Typography className="student__name" variant="h5" component="div" style={{textAlign:"left", color: "#82CAFF"}}>
            {name}
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
        <CardActions className='student__actions' sx={{ml: 1/2,
        justifyContent: "flex-end"}}>
          {role
            ?<a href={profile} target="_blank" rel="noreferrer noopener"><button className='student__profile'> Academic Profile </button></a>
            :<a href={profile} target="_blank" rel="noreferrer noopener"> <button className="student__button_git"></button></a>}
          <a href={lin} target="_blank" rel="noreferrer noopener"><button className="student__button_lin"></button></a>
        </CardActions>
      </Card>
    </AnimationOnScroll>
  )
}

export default StudentCard