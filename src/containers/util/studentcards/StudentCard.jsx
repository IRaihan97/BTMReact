import React from 'react'
import './studentcard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const StudentCard = ({title, content, studentPhoto}) => {
  return (
    <Card className= "BTM__StudentCard" sx={{borderRadius: 6}}>
      <div className='BTM__Student_Photo'>
        <img className="Student_Photo" src={studentPhoto}></img>
      </div>
      <CardContent>
        <Typography variant="h4" component="div" style={{textAlign:"center"}}>
          {title}
        </Typography>
        <Typography color="#011C46" style={{textAlign:"center"}}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default StudentCard