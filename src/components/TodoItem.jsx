import { useState } from "react";

const TodoItem = ({ id, todo, completed, handleChangeCompletedTodo, deleteTodo, editTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);

    const handleSaveTodo = () => {
        editTodo(id, editedTodo);
        setIsEditing(false);
    }

    if(isEditing){
        return (
           <div className="options">
               <input 
                    type="text" 
                    value={editedTodo} 
                    onChange={(e) => setEditedTodo(e.target.value)} 
                />
                <section className="optBot">
                    <button onClick={() => setIsEditing(false)}><i class="far fa-window-close" /></button>
                    <button onClick={handleSaveTodo}><i class="far fa-save" /></button>
                </section>
            </div>
        )
    }

    return (
        <section className="todo">
            <section className="doInput">
                <input 
                    id={`todo-${id}`} 
                    type="checkbox" 
                    checked={completed} 
                    onClick={() => handleChangeCompletedTodo(id)}
                />
                <label>|</label>
                <label htmlFor={`todo-${id}`}>{todo}</label>
            </section>
            <div className="actions">
                <button onClick={() => setIsEditing(true)}><i class="far fa-edit" /></button>
                <button
                    onClick={() => deleteTodo(id)}
                ><i class="far fa-trash-alt" /></button>
            </div>
        </section>
    );
}

export default TodoItem
