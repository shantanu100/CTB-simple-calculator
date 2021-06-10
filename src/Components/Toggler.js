import React,{useState} from 'react';
import { lightTheme, darkTheme, GlobalStyles } from '../themes';
import styled, { ThemeProvider } from 'styled-components';

function Toggler({theme,setTheme}) {


    const StyledApp = styled.div``;

    //To change Themes
    const themeToggler = () => {
        console.log("in theme toggler")
  
        theme === "light" ? setTheme("dark") : setTheme("light");
      };
  
    return (
        <div className="keypad">
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
      <StyledApp>
            <button className="highlight" onClick={themeToggler}>Theme</button>
            </StyledApp>
            </ThemeProvider>
        </div>
    )
}

export default Toggler
