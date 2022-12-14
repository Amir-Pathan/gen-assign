import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{
        backgroundColor:'white',
        color:'black'
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,paddingLeft:'30px' }}>
            {'My Apps> Client> Sites'}
          </Typography>
          <div>
            <IconButton>
                <NotificationsNoneIcon/>
            </IconButton>
            <IconButton>
                <AccountCircleIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
