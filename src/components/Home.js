import React,{ useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Menu,MenuList } from '@mui/material';



function Home() {
  

  function appBarLabel(label) {
    return (
     
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, }}>
         <MenuIcon />
         <MenuList>
         <Menu>
           Home
           </Menu> 
           </MenuList>
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  


  return (

   <>
 
    
     <Stack spacing={2} sx={{ flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel('Logo')}
        </AppBar>
      </ThemeProvider> 
    </Stack>
    
    </>
  );
  }

export default Home;