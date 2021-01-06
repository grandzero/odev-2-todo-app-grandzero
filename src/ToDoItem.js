import {useState} from 'react'

function ToDoItem({input,id,deleteItem}) {
    
    const [isCompleted, setCompleted] = useState(false); 
    const changeStatus = () => {
        setCompleted(!isCompleted);
    }
    return (
        <li className={isCompleted ? "completed" : ""}>
        <div className="view">
            <input className="toggle" onClick={() => {changeStatus()}} type="checkbox"></input>
            <label>{input}</label>
            <button className="destroy"></button>
        </div>
    </li>   
    )
}

export default ToDoItem
