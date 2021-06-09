import React,{useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes'

function BtnOps(){

    const [result, setResult] = useState("");
    const [theme, setTheme] = useState("light");
  
    const StyledApp = styled.div``;
    const [show, setShow] = useState(false);
  
  
    //To handle CLicks
    const handleClick = (e) => {
      try {
        setResult(result.concat(e.target.name));
      }
      catch (err) {
        setResult("Clear first")
  
      }
    }
  
    //To Completely Clear 
    const clear = () => {
  
      setResult("");
  
    }
  
    //To delete one by one.....
    const backspace = () => {
      setResult(result.slice(0, -1));
    }
  
    //To Calculate..........
    const calculate = () => {
      try {
        setResult(eval(result).toString());
      } catch (err) {
        setResult("Error")
      }
    }
  
    //To Change the sign
    const changeSign = (e) => {
  
      let inputVal = document.getElementById("input").value
      console.log(inputVal)
      if (inputVal > 0) {
        inputVal = inputVal * -1;
        setResult(inputVal);
      }
      else if (inputVal < 0) {
        inputVal = inputVal * -1;
        setResult(inputVal)
      }
      else {
        setResult("Error")
      }
  
    }
  
    //Till result
    const tillResult = () => {
      setResult(eval(result).toString());
  
    }
    //Click Operations
    const clickops = (e) => {
      try{
      if(result === ""){
        setResult(document.getElementById("input").value)
        
      }
      
  
      else{ 
        const character = result.charAt(result.length-1)
        if(character==="+"){
              setResult(result.replace("+","+"));
         }
         else if(character==="-"){
          setResult(result.replace("-","-"));
         }
         else if(character ==="*"){
          setResult(result.replace("*","*"));
         }
         else if(character ==="/"){
          setResult(result.replace("/","/"));
         }
         else{
           setResult(eval(result).toString() + (e.target.name));
         }
         
     } }catch(err){
       setResult("Clear screen first");
     }
  
  
    }
  
  
    //To change Themes
    const themeToggler = () => {
  
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
  
    //Tofind Square
    const square = () => {
      let square = Math.pow(result, 2)
      setResult(square)
    }
  
    const squareroot = () => {
      let sqrt = Math.sqrt(result);
      setResult(sqrt);
    }
  

return(
<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="container">
          <form>
            <input type="text" id="input" onChange={tillResult} value={result} />
          </form>

          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">Clear</button>
            <button className="highlight" onClick={backspace} id="backspace" >C</button>
            <button className="highlight" name="/" onClick={clickops}>&divide;</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button className="highlight" name="*" onClick={clickops}>&times;</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button className="highlight" name="-" onClick={clickops}>&ndash;</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button className="highlight" name="+" onClick={clickops}>+</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button className="highlight" name="=" onClick={calculate} id="result">=</button>

            <button className="highlight" onClick={themeToggler}>Theme</button>

            <button className="highlight" onClick={() => setShow(!show)} >Sci calc</button>
            {
              show ? (<div>  <button className="highlight" onClick={square} >Square</button>
                <button className="highlight" onClick={squareroot} >Square root</button>
                <button className="highlight" onClick={changeSign}>Sign</button>
              </div>) : null

            }
            
          </div>
        </div>
      </StyledApp>
    </ThemeProvider>
)
}
export default BtnOps;
