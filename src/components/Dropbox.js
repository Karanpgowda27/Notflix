import { Grid, MenuItem, InputAdornment, FormControl, InputLabel, Select } from '@mui/material'
import React, { useState } from 'react'
import TranslateIcon from '@mui/icons-material/Translate'

const Dropbox = () => {
    const [setLanguage] = useState('')
    
      const handleChange = (event) => {
        setLanguage(event.target.value)
      };
  return (
    <Grid sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        width: '10vw'
    }}>
        <FormControl style={{width:'130px', backgroundColor: 'ActiveCaption'}}>      
                    <InputLabel sx={{color:"white"}}>Language</InputLabel>
                    <Select
                    label="Language"
                    onChange={handleChange}
                    startAdornment={
                        <InputAdornment>
                        <TranslateIcon sx={{ color: 'white'}}/>
                        </InputAdornment>
                    }
                    >
                        <MenuItem>English</MenuItem>
                        <MenuItem>Hindi</MenuItem>
                        <MenuItem>Spanish</MenuItem>
                    </Select>
        </FormControl>
    </Grid>
  )
}

export default Dropbox
