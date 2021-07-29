import {CountContext} from '../App'
import React , {useContext} from 'react'


function ComponentF(){
    const countContext = useContext(CountContext)
    return(
        <div>
            Component F count - {countContext.countState}
        <button onClick = {() => countContext.CountDispatch('increment')}>Increment</button>
		<button onClick = {() => countContext.CountDispatch('decrement')}>Decrement</button>
		<button onClick = {() => countContext.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF