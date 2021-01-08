import {useState} from 'react'

function Footer({setlistChoice,listLength}) {
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

		
		<button className="clear-completed">
			Clear completed
		</button>
	</footer>
    )
}

export default Footer
