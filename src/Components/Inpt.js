import React from 'react'

function Inpt({tillResult,setResult,result}) {
    return (
        <div>
              <form>
            <input type="text" id="input" onChange={tillResult} value={result} />
          </form>
        </div>
    )
}

export default Inpt
