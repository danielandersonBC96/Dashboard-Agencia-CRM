
import React , {useState}from 'react';
import { 
    LightOutlined, 
    DarkModeOutlined,
    Menu as MenuIcon ,
    Search, 
ArrowDropDownOutlined,
SettingsOutlined,
} from '@mui/icons-material';
import FlexBetween from './Flexbetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'States/States';
import profileImage from 'assets/User-Icon.jpg';
import {AppBar, IconButton, InputBase, Toolbar, useTheme} from '@mui/material';
import { themeSettings } from 'theme';


const Navbar = ({ isSidebarOpen , setIsSidebarOpen}) => {

    const dispatch = useDispatch()
    const theme = useTheme();

  return (
    
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
     >
         <Toolbar
          sx={{
            justifyContent: "space-between"


          }}
         >
              <FlexBetween>
                <IconButton  onClick={() => setIsSidebarOpen(!isSidebarOpen)} >   
                  <MenuIcon/>
                </IconButton>
                <FlexBetween
                  backgroundColor={ theme.palette.background.alt}
                  borderRadius="9px"
                  gap= "3rem"
                  p="0.1rem 1.5rem"          
                >
                    <InputBase placeholder='Search'/>
                      <IconButton>
                      <Search/>

                      </IconButton>
                 </FlexBetween>
              </FlexBetween>

                   <FlexBetween gap="1.5rem">
                      <IconButton  onClick={() => dispatch(setMode())}>
                      {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined sx={{ fontSize: "25px" }} />
                            ) : (
                         <LightOutlined sx={{ fontSize: "25px" }} />
                           )}
                      </IconButton>
                        <IconButton>
                           <SettingsOutlined sx={{fontSize:"25px"}}/>
                          </IconButton>
                       <FlexBetween>

                      </FlexBetween>
                   </FlexBetween>
            
         </Toolbar>
    </AppBar>

   
  )
}

export default Navbar;