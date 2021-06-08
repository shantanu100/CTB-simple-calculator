
import './App.css';
import React,{useState} from 'react';
import'./mystyles.css'

function App() {
 const [result,setResult]=useState("");

 const handleClick=(e) => {
   try{ 
  setResult(result.concat(e.target.name));
   }
   catch(err){
     setResult("Clear first") 

   }
 }

//To Completely Clear 
 const clear=()=>{

  setResult("");

 }

//To delete one by one.....
 const backspace=()=>{
   setResult(result.slice(0,-1));
 }

 //To Calculate..........
 const calculate=()=>{
   try{
       setResult(eval(result).toString());
   }catch(err){
     setResult("Error")
   }
 }

 //To Change the sign
 const changeSign =(e)=>{
  //  let myresult =  setResult(eval(result));
  //   let signresult = console.log(Math.sign(myresult));
  //   console.log("signresult is ",signresult)
  //  if(signresult==1){
  //    console.log("in if block")
  //    setResult("-",result)
  //  }
  //  else{
  //   setResult("+",result)
  //  }
  

    let inputVal = document.getElementById("input").value
    console.log(inputVal)
    if(inputVal>0){
       inputVal= inputVal * -1;
      setResult(inputVal);
    }
    else if(inputVal<0){
      inputVal= inputVal * -1;
      setResult( inputVal)
    }
    else{
      setResult("Error")
    }
    
 }

 //Till result
 const tillResult = ()=>{
  setResult(eval(result).toString());

 }

 const clickops = (e)=>{
  setResult(eval(result)  +  (e.target.name) );
}

  return (
    <div className="App">
       <div className = "container">
         <form>
            <input type="text" id="input" onChange ={tillResult} value={result} />
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
           <button onClick={changeSign}>Sign</button>

        
         </div>
       </div>
    </div>
  );
}

export default App;
