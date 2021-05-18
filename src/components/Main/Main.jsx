import Navbar from "../Nav/Navbar";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Content from "../Content/Content";
import { CounterContextProvider } from "../../contexts/CounterContext";
import "./main.css"

const Main = () => {
    return (
        <div className = "main">
            <CounterContextProvider>
            <Navbar />
            <div className ="page">
                <Sidebar>
                    <h1>Element 1</h1>
                    <h2>Element 2</h2>
                    <h3>Element 3</h3>
                </Sidebar>
                <Content />
            </div>
            </CounterContextProvider>
        </div>
    )
}

export default Main;