import React from 'react'
import ToDoList from './ToDoList';
function ToDoSection({list,del,setCompleted,toggleAll}) {
    return (
        <section className="main">
		<input className="toggle-all"  type="checkbox"></input>
		<label onClick={() => toggleAll()} >
			Tamamlandı Olarak İşaretle
		</label>
        <ToDoList del={del} ls={list} setCompleted={setCompleted}/>
		
	</section>
    )
}

export default ToDoSection
