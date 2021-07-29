// multiple use Reducers 
// when dealing with multiple state variables which have same state transition , we can use multiple useReducers

import React , {useReducer} from 'react'

const initialState = 0 
const reducer = (state , action) =>{

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

function CounterThree(){

	const [count,dispatch] = useReducer(reducer , initialState) 
	const [countTwo ,dispatchTwo ] = useReducer(reducer , initialState) 



	return(
	<div>
        <div>Count -{count}</div>
		<button onClick = {() => dispatch('increment')}>Increment</button>
		<button onClick = {() => dispatch('decrement')}>Decrement</button>
		<button onClick = {() => dispatch('reset')}>Reset</button>

		<div marginTop='100px'>Count Two  -{countTwo}</div>
		<button onClick = {() => dispatchTwo('increment')}>Increment</button>
		<button onClick = {() => dispatchTwo('decrement')}>Decrement</button>
		<button onClick = {() => dispatchTwo('reset')}>Reset</button>
	</div>
	)
}

export default CounterThree ;

/*
useReducer with useContext

useReducer - local state management 
share between components - global state management 
useReducer + useContext 

useCase :- to share state and methods to change state in deep down levels of component Tree .
useContext helps to access state anywhere in the component tree 
useReducer will help to manage that globally available state 

*/