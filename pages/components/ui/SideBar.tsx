
import {Drawer,Box, Typography, List, ListItem, ListItemIcon,ListItemText, Divider} from "@mui/material";

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
const menuItems:string[] = ['Home']

export const SideBar = () => {
  
  
  
  return (
    <div style={{
      height:'100vh',
      backgroundColor:'#4a148c'
    }}>
    <Box sx={{width:250}}>
    <Box sx={{
    padding: '5px 10px', 
    position: 'absolute',
    top: '64px',
   }}>
   
      <List>
        {menuItems.map((item,index) => (
          <ListItem key={index} >
           <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
           </ListItemIcon>
           <ListItemText primary={item} />
          </ListItem>
        ))}

      </List>
   </Box>
    </Box>
   <Divider/>
    
    </div>
  )
}
