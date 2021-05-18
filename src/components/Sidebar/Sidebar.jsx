import "../Sidebar/style.css"
const Sidebar = (props) => {
    return (
        <div className ="sidebar">
            <h1>sidebar</h1>
            {props.children}
        </div>
    )
}

export default Sidebar