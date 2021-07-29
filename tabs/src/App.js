import React , {useReducer} from 'react' ; 
import Buttons from './components/buttons'

// importing components 
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import ComponentC from './components/componentC';


// context
export const tabContext = React.createContext()

// initializing an initial state 
const initialState = {
  currentTab : 1 
}

// reducer and action 
const reducer = (state , {type , payload}) =>{
  console.log(payload)
  switch(type){
    case 'SET_CURRENT' :
      return { currentTab : payload } 
    default :
      return state
  }
}

function App() {

  // dispatch , state 
  const [state , dispatch] = useReducer(reducer,initialState)

  console.log(state)

  return (
    <tabContext.Provider value={{currentTab:state.currentTab , tabDispatch : dispatch} }>
    <div className="App">
      <Buttons />
      <h1>Tab Value</h1>
      <div>
        {state.currentTab === 1 && < ComponentA />}
        {state.currentTab === 2 && < ComponentB />}
        {state.currentTab === 3 && < ComponentC />}     
      </div>
    </div>
    </tabContext.Provider>
  );
}

export default App;
