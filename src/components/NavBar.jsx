import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <AppBar position="sticky" color="transparent" elevation={1} sx={{backgroundColor:'#0f2130'}}>
      <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant="h6" component={RouterLink} to="/" sx={{textDecoration:'none',color:'white',fontWeight:700, fontFamily:'system-ui', cursor:'pointer'}}>Portfolio</Typography>
        <Box display="flex" gap={1}>
          <Button component={RouterLink} to="/" color="inherit" sx={{fontFamily: 'system-ui', ":hover":{backgroundColor:'#00d1ff', color:'#071c22'}}}>Home</Button>
          <Button component={RouterLink} to="/about" color="inherit" sx={{fontFamily: 'system-ui', ":hover":{backgroundColor:'#00d1ff', color:'#071c22'}}}>About</Button>
          <Button component={RouterLink} to="/services" color="inherit" sx={{fontFamily: 'system-ui', ":hover":{backgroundColor:'#00d1ff', color:'#071c22'}}}>Services</Button>
          <Button component={RouterLink} to="/skills" color="inherit" sx={{fontFamily: 'system-ui', ":hover":{backgroundColor:'#00d1ff', color:'#071c22'}}}>Skills</Button>
          <Button component={RouterLink} to="/projects" color="inherit" sx={{fontFamily: 'system-ui', ":hover":{backgroundColor:'#00d1ff', color:'#071c22'}}}>Project</Button>
          <Button component={RouterLink} to="/contact" color="inherit" sx={{fontFamily: 'system-ui', ":hover":{backgroundColor:'#00d1ff', color:'#071c22'}}}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
