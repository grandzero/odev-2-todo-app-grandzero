import {useState} from 'react'
import ToDoItem from './ToDoItem';
function ToDoList({ls}) {
    console.log("TodoList : ", ls);
    const deleteItem = () => {

    }
    return (
    <ul className="todo-list">
            {ls.map(item => {
                //console.log(item.test);
                return <ToDoItem key={item.id} input={item.text} id={item.id} deleteItem={deleteItem}/>
            })}
            

	</ul>
    )
}

export default ToDoList
