import React from 'react'
import ToDoList from './ToDoList';
function ToDoSection({list}) {
	//console.log("Liste : ", list);
    return (
        <section className="main">
		<input className="toggle-all" type="checkbox"></input>
		<label htmlFor="toggle-all">
			Tamamlandı Olarak İşaretle
		</label>
        <ToDoList ls={list}/>
		
	</section>
    )
}

export default ToDoSection
