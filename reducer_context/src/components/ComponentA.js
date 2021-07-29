import React , {useContext} from 'react'
import {CountContext} from '../App'

// componentA,B,C,..F are example of useContext + useReducer


function ComponentA(){
    const countContext = useContext(CountContext)
    return(
        <div>
            Component A count - {countContext.countState}
        <button onClick = {() => countContext.CountDispatch('increment')}>Increment</button>
		<button onClick = {() => countContext.CountDispatch('decrement')}>Decrement</button>
		<button onClick = {() => countContext.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA