import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import './Header.css' 
import logo from './logo.png' 

const Header = () => (
  <AppBar position="static" className="appBar">
    <Toolbar className="toolbar">
      <Box className="logoSection">
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="LawLogix Logo" className="logo" />
        </IconButton>
        <Typography variant="h6" className="title">
          LawLogix
        </Typography>
      </Box>

      <Typography variant="body1" className="quote">
        "Ensuring Justice with Efficiency"
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
