import React from 'react'

function Scie({result,setResult,show,setShow,square,squareroot,changeSign}) {
   

    return (
        <div>
            <button className="highlight" onClick={() => setShow(!show)} >Sci calc</button>
            {
              show ? (<div>  <button className="highlight" onClick={square} >Square</button>
                <button className="highlight" onClick={squareroot} >Square root</button>
                <button className="highlight" onClick={changeSign}>Sign</button>
              </div>) : null

            }
        </div>
    )
}

export default Scie
