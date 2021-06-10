import React from 'react'
import Inpt from './Inpt'
import Btn from './Btn'
import Scie from './Scie';


function Func({result,setResult,show,setShow}) {


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
        try{
            
        setResult(result.slice(0, -1));
        }catch(err){
            setResult("Clear screen")
        }
      }
    
      //To Calculate..........
      const calculate = () => {
        try {
          setResult(eval(result).toString());
        } catch (err) {
          setResult("Error")
        }
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
    
    //Till result
    const tillResult = () => {
        setResult(eval(result).toString());
    
      }

        //Tofind Square
    const square = () => {
        console.log("in square")
        let square = Math.pow(result, 2)
        setResult(square)
      }
    
      const squareroot = () => {
        let sqrt = Math.sqrt(result);
        setResult(sqrt);
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

    

      return(
          <div>
              <Inpt tillResult={tillResult} result={result} setResult={setResult}/>
              <Btn result={result} setResult={setResult} handleClick={handleClick} clickops={clickops} calculate={calculate} clear={clear} backspace={backspace}/>
              <Scie square={square} squareroot={squareroot} changeSign={changeSign} show={show} setShow={setShow} />
              
          </div>
      )
   
}

export default Func
