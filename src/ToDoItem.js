
function ToDoItem({input,id,deleteItem,setCompleted,isCompleted}) {  
    const changeStatus = () => {
        setCompleted(id);
    }
    return (
        <li className={isCompleted ? "completed" : ""}>
        <div className="view">
            <input className="toggle" onClick={() => {changeStatus()}} type="checkbox"></input>
            <label>{input}</label>
            <button className="destroy" onClick={() => deleteItem(id)}></button>
        </div>
    </li>   
    )
}

export default ToDoItem
