import React from "react";
import { useReducer } from "react";

const Form = () => {

 //const [defValue, changeValue] = useState(0);
 //const [isTrue, isNotTrue] = useState(true);

 const reducer = (state,action) => {
            switch(action.type){
                case "INCREMENT":
                    return { count: state.count + 1, isNotTrue: state.isNotTrue}
                 case "toggleText":
                    return { count: state.count , isNotTrue: !state.isNotTrue}  
                 default:
                    return state    
            }
 } 

const [state, dispatchx] = useReducer(reducer, {count: 0, isNotTrue: true})
 
 
 return (   
    <>
       Value : <input type="text"  value={state.count} className="addBorder" /><br/>
        { state.isNotTrue && <p>This is Text</p>}
       <button onClick={ () => { dispatchx({type: "INCREMENT"}); dispatchx({type: "toggleText"});}}>Change Value</button>
    </>
 )
}

export default Form