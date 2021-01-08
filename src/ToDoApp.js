import {useState} from 'react';
import ToDoSection from './ToDoSection';
import Header from './Header';
import Footer from './Footer';
function ToDoApp() {
const [todoList, settodoList] = useState([])
const addItem = (item) => {
    const newLS = [{text: item, id: Math.random()},...todoList];
   // console.log(newLS);
    settodoList(newLS);
   // console.log(newLS);
} 
    return (
        <section className="todoapp">
            <Header addItem = {addItem}/>
            <ToDoSection list = {todoList}/>
            <Footer />
        </section>
    )
}

export default ToDoApp
