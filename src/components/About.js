import React from 'react'
import { Grid, Typography } from '@mui/material'

const About = () => {
  return (
    <Grid container sx={{
      backgroundColor: 'red',
      p: '243.5px',
      marginTop: '24px',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position:"relative"
      }}>
      <Typography sx={{color:'white'}}>Hi this is Karan. Suprised to look at what I haev created? Yeah, me too. </Typography>
      <Typography sx={{color:'white'}}>This is my project named NOTFLIX. Yes! You read it right, its not Netflix, and its NOTFLIX.</Typography>
      <Typography sx={{color:'white'}}> In this project, I have tried to create a simple repltica of NETFLIX.</Typography>
      <Typography sx={{color:'white'}}> I have used basic components of Material UI and implemented them onto my JavaScript.</Typography> 
      <Typography sx={{color:'white'}}> Also, I have used the help of Cards, which is a component of Material UI, and given it the movies and T.V. shows banner, title and description.</Typography>
    </Grid> 
  )
}

export default About
