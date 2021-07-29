import React , {useReducer} from 'react'

const initialState = 0 
const reducer = (state , action) =>{

    // state is the current state and action is the instruction to be executed on state 
	// action is instruction to reducer fxn for state transition
	// switch statement for action
    // action triggers state transition 
    // component rerenders 
	switch(action){
		case 'increment':
			return state+1
		case 'decrement':
			return state-1
		case 'reset':
			return initialState
		default:
			return state
	}

}

function CounterOne(){
	// returns pair values
    // dispatch method allows us to execute code corresponding to a particular action 
	const [count,dispatch] = useReducer(reducer , initialState) // passing reducer function and initial value 
    // using dispatch we can do various kind of actions on state 
    // capable of accepting an action to execute the code specified in render 
    // to dispatch the function on based on what button user click

	return(
	<div>
        <div>Count -{count}</div>
		<button onClick = {() => dispatch('increment')}>Increment</button>
		<button onClick = {() => dispatch('decrement')}>Decrement</button>
		<button onClick = {() => dispatch('reset')}>Reset</button>
	</div>
	)
}

export default CounterOne ;