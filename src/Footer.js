import {useState} from 'react'

function Footer({setlistChoice,listLength,clearCompleted,completedLength}) {
	const [listStyle, setListStyle] = useState([true,false,false]);
    return (
        <footer className="footer">

		
		<span className="todo-count">
			<strong>{listLength} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className={listStyle[0] && "selected"} onClick={() => {setlistChoice(null); setListStyle(true,false,false)}}>All</a>
			</li>
			<li>
				<a className={listStyle[0] && "selected"} onClick={() => {setlistChoice(false); setListStyle(false,true,false)}} >Active</a>
			</li>
			<li>
				<a className={listStyle[0] && "selected"} onClick={() => {setlistChoice(true); setListStyle(false,false,true)}} >Completed</a>
			</li>
		</ul>

		
		{completedLength>0 &&<button onClick={clearCompleted} className="clear-completed">
			Clear completed
		</button>}
	</footer>
    )
}

export default Footer
