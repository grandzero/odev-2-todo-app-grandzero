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
const clearCompleted = () => {
    settodoList(todoList.filter(item => !item.isCompleted));
}
const toggleAll = () => {
    console.log("Toggle clicked");
    if(todoList.filter(item => item.isCompleted === false).length > 0) settodoList(todoList.map(item => {item.isCompleted=true; return item;}));
    else settodoList(todoList.map(item => {item.isCompleted=false; return item;}));
}
    return (
        <section className="todoapp">
            <Header addItem = {addItem}/>
            <ToDoSection
             del={deleteItem}
              list = {todoList.filter(item => { if(listChoice === null) return item; return item.isCompleted === listChoice })} 
              setCompleted = {setItemCompleted}
              toggleAll={toggleAll}
              />
            <Footer 
            clearCompleted={clearCompleted} 
            setlistChoice={setlistChoice}
             listLength={todoList.filter(item => item.isCompleted === false).length} 
             completedLength={todoList.filter(item => item.isCompleted === true).length}/>
        </section>
    )
}

export default ToDoApp
