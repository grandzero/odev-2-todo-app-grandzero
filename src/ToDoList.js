import {useState} from 'react'
import ToDoItem from './ToDoItem';
function ToDoList({ls,del,setCompleted}) {
    return (
    <ul className="todo-list">
            {ls.map(item => {
                
                return <ToDoItem  key={item.id} input={item.text} id={item.id} deleteItem={del} setCompleted={setCompleted} isCompleted={item.isCompleted}/>
            })}
            

	</ul>
    )
}

export default ToDoList
