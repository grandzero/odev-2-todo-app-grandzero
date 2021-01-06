import {useState} from 'react';
import ToDoSection from './ToDoSection';
import Header from './Header';
import Footer from './Footer';
function ToDoApp() {

    return (
        <section class="todoapp">
            <Header />
            <ToDoSection />
            <Footer />
        </section>
    )
}

export default ToDoApp
