import {useState} from 'react';
import ToDoSection from './ToDoSection';
import Header from './Header';
import Footer from './Footer';
function ToDoApp() {
const [todoList, settodoList] = useState([])
const [listChoice, setlistChoice] = useState(null); // "null" means all "false" means Active and "true" means completed
const addItem = (item) => {
    const newLS = [{text: item, id: Math.random(),isCompleted:false},...todoList];
    settodoList(newLS);   
} 
const deleteItem = (id) => {
    settodoList(todoList.filter(item => id !== item.id));
}
const setItemCompleted = (id) => {
    const i = todoList.findIndex(item => item.id === id);
    const newLs = [...todoList];
    newLs[i].isCompleted = !newLs[i].isCompleted;
    settodoList(newLs);  
}
    return (
        <section className="todoapp">
            <Header addItem = {addItem}/>
            <ToDoSection del={deleteItem} list = {todoList.filter(item => { if(listChoice === null) return item; return item.isCompleted === listChoice })} setCompleted = {setItemCompleted}/>
            <Footer setlistChoice={setlistChoice} listLength={todoList.filter(item => item.isCompleted === false).length}/>
        </section>
    )
}

export default ToDoApp
