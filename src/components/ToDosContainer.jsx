import ToDoItem from "./ToDoItem";
import { useState,useContext } from "react";
import{MyContext} from "../context/ContextContainer"
const ToDosContainer = () => {
  const{todos, addItem}=useContext(MyContext);
  const [value, setValue] = useState("");

  const handleNewTodoChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(value);
    setValue("");
  };
 
  const toDoItems = todos.map((todo) => {
    return <ToDoItem item={todo} key={todo.id} />;
  });

  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todo" className="input-item">
          <input
            type="text"
            name="todo"
            id="todo"
            value={value}
            onChange={handleNewTodoChange}
          />
        </label>
        <input type="submit" value="ADD" className="btn" />
      </form>
      <h3>TO DO</h3>
      {todos.length > 0 && toDoItems}
    </div>
  );
};

export default ToDosContainer;