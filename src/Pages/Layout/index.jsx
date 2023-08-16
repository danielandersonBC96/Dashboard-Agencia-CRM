import React, {useState} from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from 'Components/Navbar';
import Navbar from 'Components/Navbar';

const  Layout = () => {
  return (
    <div>
      <h1>  Admin Dashboard</h1>
       <Box width= "100%"  height="100%">
        <Box>
          <Navbar/>
          <Outlet/>
        </Box>
       </Box>
    </div>
  )
}

export default  Layout; 