import { createContext, useReducer } from "react";


const CounterContext = createContext({});


export default CounterContext;


const reducer = (state, action) => {
    switch(action.type) {
        case "Increment": 
            return {counter:  state.counter + 1 };
        case "Decrement":
            return {counter: state.counter - 1 };
        case "Reset": 
            return {counter: state.counter }
        default:
            return state;
    }
}


export const CounterContextProvider = (props) => {
    const initialState = {counter: 0};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value = {{state, dispatch}}>
            {props.children}
        </CounterContext.Provider>
    )

}

 