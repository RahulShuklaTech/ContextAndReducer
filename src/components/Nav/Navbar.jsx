import { useContext } from "react";
import "./nav.css";
import CounterContext from "../../contexts/CounterContext"
const Navbar = () => {
    
    const { state } = useContext(CounterContext)
    return (
        <div className = "navbar"> 
            <h1>Navbar</h1> 
            <h1>{state.counter}</h1>
        </div>
    )
}

export default Navbar;