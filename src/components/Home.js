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
//  import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


function Home() {
//  export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //  { ...state, [anchor]: open }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List> 
      

    
      
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
           
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

   function appBarLabel(label,anchor) {
     return (
       <Toolbar >
              {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button sx={{position: "absolute", right: "10px"}} onClick={toggleDrawer(anchor, true)}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, }}>
         <MenuIcon />
         <MenuList>
         <Menu>
           Home
           </Menu> 
           </MenuList>
        </IconButton>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>))}
         <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
           {label}
         </Typography>
       </Toolbar>
   
       );
       }
  //     function appBarLabel(label) {
  // return (
  //    <div>
  //      {['right'
  //     ].map((anchor) => (
  //        <React.Fragment key={anchor}>
  //          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
  //          <Drawer
  //            anchor={anchor}
  //            open={state[anchor]}
  //            onClose={toggleDrawer(anchor, false)}
  //          >
  //            {list(anchor)}
  //          </Drawer>
  //        </React.Fragment>
  //      ))}
  //    </div>
 
   
  //  );
  //      }



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
          {appBarLabel('L🔵g🔴')}
        </AppBar>
      </ThemeProvider> 
    </Stack>
    
    </>
  );
  }

export default Home;
