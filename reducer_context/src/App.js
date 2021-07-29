import React , {useReducer} from 'react' ; 
import './App.css';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

export const CountContext = React.createContext()



// initial state of counter , reducer 
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

function App() {

  const [count , dispatch] = useReducer(reducer , initialState)
  // dispatch needs to be used from nested components
  // provide count and dispatch as context 
  // count value will be shared amonng all components 
  return (
    <CountContext.Provider value={{countState : count , CountDispatch : dispatch}}>
      <div className="App">
        count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
