import {useState} from 'react'
import ToDoItem from './ToDoItem';
function ToDoList() {
    const [itemList, setItemList] = useState([]);
    const addItem = (item) => {
        setItemList([item,...itemList]);
    }
    const deleteItem = () => {

    }
    return (
    <ul className="todo-list">
            <ToDoItem input="Test1" id={0} deleteItem={deleteItem}/>

	</ul>
    )
}

export default ToDoList
