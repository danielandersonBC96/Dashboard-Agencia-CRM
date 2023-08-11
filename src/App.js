import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import {  CssBaseline, ThemeProvider} from '@mui/icons-material';
import {createTheme} from  '@mui/icons-material '; 
import  { useMemo } from 'react';
import { useSettings} from 'theme';
import { BrowserRouter, Route } from "react-router-dom";



function App() {
  
const mode = useSelector((state) => state.global.mode);
const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  return (
    <div className="App">
     <BrowserRouter>
       <ThemeProvider theme={theme} >
           <CssBaseline/>
           <Routes >
             <Route> </Route>

           </Routes>
       </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
