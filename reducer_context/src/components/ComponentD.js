import {CountContext} from '../App'
import React , {useContext} from 'react'


function ComponentD(){
    const countContext = useContext(CountContext)
    return(
        <div>
            Component D count - {countContext.countState}
        <button onClick = {() => countContext.CountDispatch('increment')}>Increment</button>
		<button onClick = {() => countContext.CountDispatch('decrement')}>Decrement</button>
		<button onClick = {() => countContext.CountDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD