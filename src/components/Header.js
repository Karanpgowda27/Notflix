import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Drawer, Grid, IconButton, InputBase, Paper, Typography,  } from '@mui/material'
import Logo from '../components/images/newlogo.png'
import MenuIcon from '@mui/icons-material/Menu'
import Dropbox from './Dropbox'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
    const navigate = useNavigate();
    const otherURL = 'http://localhost:3001/'
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen)
    }
    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '10vh',
            backgroundColor: 'black'
        }}>
            <Grid item md={2} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <a href={otherURL}>
                    <img src={Logo} alt='Logo.png' style={{
                        height: '50px',
                        marginTop: '20px',
                    }}>
                </img>
                </a>
            </Grid>
            <Grid item md={5} sx={{
                display: { md: 'flex', sm: 'none', xs: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: '60px',
                marginTop: '20px'
            }}>
                <Typography variant='button' sx={{cursor:'pointer', color: 'white'}} onClick={() => navigate('/')}>Home</Typography>
                <Typography variant='button' sx={{cursor:'pointer', color: 'white'}} onClick={() => navigate('/about')}>About</Typography>
                <Typography variant='button' sx={{cursor:'pointer', color: 'white'}} onClick={() => navigate('/contact')}>Contact</Typography>
                <Typography variant='button' sx={{cursor:'pointer', color: 'white'}} onClick={() => navigate('/help')}>Help</Typography>
            </Grid>
            <Grid item md={4} sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                gap: '10px'
            }}>
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                }}>
                <MenuIcon />
                </IconButton>
                <Paper
                    component="form"sx={{ 
                        p: '5px 4px', 
                        display: 'flex', 
                        alignItems: 'center',
                        marginTop: '20px' 
                    }}
                >
                    <InputBase sx={{ 
                        ml: 1, 
                        flex: 1 
                    }}
                    placeholder="Search" inputProps={{ 'aria-label': 'search' }}/>
                    <IconButton type="button" sx={{ p: '1px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </Paper>
                <Dropbox/>
            </Grid>
            <Drawer anchor='right' open={isSidebarOpen} onClose={toggleSidebar}>
                <Grid sx={{
                    marginTop: '18px',
                    width: '122px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant='button' onClick={() => {navigate('/'); toggleSidebar();}}>Home</Typography>
                    <Typography variant='button' onClick={() => {navigate('/about'); toggleSidebar();}}>About</Typography>
                    <Typography variant='button' onClick={() => {navigate('/contact'); toggleSidebar();}}>Contact</Typography>
                    <Typography variant='button' onClick={() => {navigate('/help'); toggleSidebar();}}>Help</Typography>              
                </Grid>
            </Drawer>
            <Grid item md={1}>
            <Button sx={{
                backgroundColor:'red', 
                textTransform: 'inherit',
                marginTop: '20px',
                color: 'white'
                }} 
                href={otherURL}>Sign In</Button>
            </Grid>
        </Grid>
    )
}
export default Header