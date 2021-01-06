import React from 'react'
import ToDoApp from './ToDoApp';
import ToDoList from './ToDoList';
function ToDoSection() {
    return (
        <section className="main">
		<input className="toggle-all" type="checkbox"></input>
		<label for="toggle-all">
			Tamamlandı Olarak İşaretle
		</label>
        <ToDoList />
		
	</section>
    )
}

export default ToDoSection
