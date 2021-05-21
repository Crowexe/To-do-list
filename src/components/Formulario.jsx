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
            <button className="add">+</button>
            <input 
                className="barra"
                type="text" 
                placeholder="Add a task" 
                onChange={(e) => setTodo(e.target.value)}
                value={todo} 
            />
        </form> 
    )
}

export default Formulario
