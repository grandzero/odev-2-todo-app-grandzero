import {useState} from 'react'
import ToDoItem from './ToDoItem';
function ToDoList({ls,del}) {
    return (
    <ul className="todo-list">
            {ls.map(item => {
                
                return <ToDoItem  key={item.id} input={item.text} id={item.id} deleteItem={del}/>
            })}
            

	</ul>
    )
}

export default ToDoList
