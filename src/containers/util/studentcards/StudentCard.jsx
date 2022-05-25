import React from 'react'
import './studentcard.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const StudentCard = ({title, content}) => {
  return (
    <Card className= "BTM__ServiceCard" sx={{borderRadius: 6}}>
      <div>TESTING MODAFOCKA</div>
      <CardContent>
        <Typography variant="h4" component="div" style={{textAlign:"center"}}>
          {title}
        </Typography>
        <Typography sx={{ m: 5 }} color="#011C46" style={{textAlign:"center"}}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default StudentCard