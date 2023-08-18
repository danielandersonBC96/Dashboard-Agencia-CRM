import React, {useState} from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'Components/Navbar';
import Sidebar from 'Components/Sidebar';

const  Layout = () => {

const isNonMobile = useMediaQuery("( min-width: 1600px  )");
const [isSidebarOpen , setIsSidebarOpen] = useState(true)


  return (
    <div>
       <Box
       display={ isNonMobile  ?  "flex"  :  "block" }    width="100%" height="100%"  
  
       
       >
       <Sidebar
        isNonMobilee={isNonMobile}
        drawerWidht= "250px"
         isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
       />
        
          
        <Box>
          <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet/>
        </Box>
       </Box>
    </div>
  )
}

export default  Layout; 