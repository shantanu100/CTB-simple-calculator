
import React, { useState } from 'react';
import { lightTheme, darkTheme, GlobalStyles } from './themes'
import Toggler from './Components/Toggler';
import './mystyles.css';
import Func from './Components/Func'


function App() {

  const [result, setResult] = useState("");

  const [theme, setTheme] = useState("light");

  const [show, setShow] = useState(false);


  return (


    <div className="container">

      <Func result={result} setResult={setResult} show={show} setShow={setShow} theme={theme} setTheme={setTheme} />
      <Toggler theme={theme} setTheme={setTheme} />


    </div>



  )
}
export default App;
