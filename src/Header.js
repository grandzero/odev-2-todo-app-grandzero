import {useState} from 'react'

function Header({addItem}) {
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(input);
    }
    return (
        <header className="header">
		<h1>Yapılacaklar</h1>
		<form onSubmit={handleSubmit}>
			<input className="new-todo" placeholder="What needs to be done?" value={input} onChange={(e) => setInput(e.target.value)} autofocus></input>
		</form>
	    </header>
    )
}

export default Header
