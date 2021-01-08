import {useState} from 'react';
import ToDoSection from './ToDoSection';
import Header from './Header';
import Footer from './Footer';
function ToDoApp() {
const [todoList, settodoList] = useState([])
const addItem = (item) => {
    const newLS = [{text: item, id: Math.random()},...todoList];
    settodoList(newLS);   
} 
const deleteItem = (id) => {
    settodoList(todoList.filter(item => id != item.id));
}
    return (
        <section className="todoapp">
            <Header addItem = {addItem}/>
            <ToDoSection del={deleteItem} list = {todoList}/>
            <Footer />
        </section>
    )
}

export default ToDoApp
