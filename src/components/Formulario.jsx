import { useState } from "react";
import { nanoid } from "nanoid";


const Formulario = ({ todos, setTodos }) => {

        const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([{ id: nanoid(3), todo, completed: false }, ...todos]);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="barra"
                type="text" 
                placeholder="What needs to be done?" 
                onChange={(e) => setTodo(e.target.value)}
                value={todo} 
            />
            <button className="add">+</button>
        </form> 
    )
}

export default Formulario
