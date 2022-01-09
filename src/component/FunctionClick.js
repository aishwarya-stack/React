import React from 'react'

function FunctionClick() {
    
    function clickHandler() {
        console.log('b')
    }
    return(
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default Greet