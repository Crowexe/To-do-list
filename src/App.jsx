import "./App.css";
import Formulario from "./components/Formulario";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";

const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed
}

const filterkeys = Object.keys(FILTER_MAP);

const initialState = JSON.parse(localStorage.getItem("todos") || "[]");
const filterInitialState = localStorage.getItem("filter") || "All";

const App = () => {

    const [todos, setTodos] = useState(initialState);
    const [filter,setFilter] = useState(filterInitialState);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    useEffect (() => {
        localStorage.setItem("filter", filter);    
    }, [filter])

    const handleChangeCompletedTodo = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const editTodo = (id, todop) => {
        const newTodos = todos.map(todoitem => {
            if(todoitem.id === id) {
                return {...todoitem, todo: todop};
            }
            return todoitem;
        });
        setTodos(newTodos);
    }

    return (
        <main>
            <section id="top">
                <h1 className="title">To-do-list</h1>          
                    <section id="filters">
                        {filterkeys.map(filterKey => (
                            <button className="filtros" key= {filterKey} onClick={() => setFilter(filterKey)}>{filterKey} tasks</button>
                        ))}       
                    </section>
            </section>
            <section id="todo-list">
                {todos.length > 0 ? todos.filter(FILTER_MAP[filter]).map(({ id, todo, completed }) => (
                    <TodoItem 
                        key={id} 
                        id={id} 
                        todo={todo} 
                        completed={completed} 
                        handleChangeCompletedTodo={handleChangeCompletedTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )) : (
                    <section className="status">
                        <img src="https://i.imgur.com/OMzIpyl.png"></img>
                        <br></br><h2>Empty list</h2><br></br>
                        <h3>You are already free or you are about to stop being so</h3>
                        
                    </section>
                )}
            </section>
            <section id="bot">
                <Formulario todos={todos} setTodos={setTodos} />
            </section>
        </main>
    )
}

export default App;