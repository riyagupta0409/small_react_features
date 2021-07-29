import React , {useReducer} from 'react'

// object instead of variable 
const initialState = {
    firstCounter : 0 ,
    secondCounter : 10 ,
}
const reducer = (state , action) =>{

    console.log(state , action)
    // both state and actions are now objects 
    // in action , to get type of action we use action.type 
	switch(action.type){
		case 'increment':
			return {...state , firstCounter : state.firstCounter + action.value }
		case 'decrement':
			return {...state ,firstCounter : state.firstCounter - action.value }
        case 'increment2':
            return {...state ,secondCounter : state.secondCounter + action.value }
        case 'decrement2':
            return {...state ,secondCounter : state.secondCounter - action.value }
		case 'reset':
			return initialState
		default:
			return state
	}

}

function CounterTwo(){

	const [count,dispatch] = useReducer(reducer , initialState) // passing reducer function and initial value 


	return(
	<div>
        <div>1 Count -{count.firstCounter}</div>
        <div>2 Count -{count.secondCounter}</div>

		<button onClick = {() => dispatch({type :'increment' , value : 1})}>Increment</button>
		<button onClick = {() => dispatch({type :'decrement' , value : 1})}>Decrement</button>

        <button onClick = {() => dispatch({type :'increment' , value : 5})}>Increment 5</button>
		<button onClick = {() => dispatch({type :'decrement' , value : 5})}>Decrement 5</button>

        <div>
        <button onClick = {() => dispatch({type :'increment2' , value : 1})}>Increment 2</button>
		<button onClick = {() => dispatch({type :'decrement2' , value : 1})}>Decrement 2</button>
        </div>
        
		<button onClick = {() => dispatch({type : 'reset' })}>Reset</button>
	</div>
	)
}

export default CounterTwo ;

// advantage of this pattern 
// 1. pass aditional data to action apart from type ex. value 
// 2. in state as well we can have different properties as object 
// manatain both state and action as objects 