import { Grid, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <Grid  container sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position:"relative"
        }}>
        <Grid>
            <InputAdornment sx={{
                color: 'white',
                gap:'40px'
                }}>
            <a
              href="https://www.instagram.com/netflix_in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.instagram.com/netflix_in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/netflix_in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <XIcon />
            </a>
            <a
              href="https://www.instagram.com/netflix_in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <YouTubeIcon />
            </a>
            </InputAdornment>
        </Grid>
        <Grid sx={{
            marginTop: '15px'
        }}>
            <InputAdornment sx={{
            
            }}>
                <CopyrightIcon sx={{color:'grey', height:'15px'}}/>        
                <Typography  variant='caption' sx={{color: 'grey'}}>1997 - 2025 Notflix, Inc.</Typography>
            </InputAdornment>
        </Grid>
    </Grid>
  )
}

export default Footer