import React,{useState,useEffect} from "react"
import {Drawer,Toolbar,Divider,List,ListItem,ListItemText,ListItemButton,ListItemIcon} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import drawerItem from "./draweritem";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


function SideDrawer(){

  const [path,setPath] =useState('')

   useEffect(()=>{

    setPath(window.location.pathName)

  },[])

  const navigate = useNavigate()

  const gotoPathe=(path)=> navigate(path)

    return(
        <Drawer
        sx={{
          width: '350',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '350',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div style={{
            textAlign:'center'
        }}>
        <Typography variant="h5"
        style={{
            textAlign:'center',
            fontWeight:"bold",
            paddingTop:"20px"
        }}
        >CAIT</Typography>
        <Typography variant="div" style={{
            textAlign:'center'
        }}>EDUSYS Pvt.Ltd</Typography>
        </div>
        <Toolbar />
        <Divider />
        <List>
          {
            drawerItem.map((i,index)=>{

                return <ListItem key={index} disablePadding
                onClick={()=>gotoPathe(i.path)} >
                <ListItemButton >
                   <ListItemIcon>
                       {i.icon}
                    </ListItemIcon> 
                  <ListItemText primary={i.heading}/>
                </ListItemButton>
              </ListItem>

            })
          }
        </List>
      </Drawer>
    )

}

export default SideDrawer