import { useState } from "react";
import useStore from "../store/useStore";

const TodoList: React.FC = () => {
    const todos = useStore((state) => state.todos);
    const addTodo = useStore((state) => state.addTodo);
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return(
        <div>
            <h2>Todo List</h2>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo} >Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;