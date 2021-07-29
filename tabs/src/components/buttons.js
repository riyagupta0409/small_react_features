import React , {useContext} from 'react' ; 
import {tabContext} from '../App'


function Buttons() {
const TabContext = useContext(tabContext)

  return (
    <div>
        <button onClick={()=> TabContext.tabDispatch({type:'SET_CURRENT', payload:1})}>A</button>
        <button onClick={()=> TabContext.tabDispatch({type:'SET_CURRENT', payload:2})}>B</button>
        <button onClick={()=> TabContext.tabDispatch({type:'SET_CURRENT', payload:3})}>C</button>

    </div>
  );
}

export default Buttons;
