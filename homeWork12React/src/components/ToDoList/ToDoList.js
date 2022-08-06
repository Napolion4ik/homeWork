import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { getPost } from "../../api/api";
import FormTodo from "../FormTodo/FormTodo";
import TodoItem from "../TodoItem/TodoItem";
import "./ToDoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getPost().then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="todo-list">
      <div className="container">
        <p className="todo-list__text">Список справ</p>
        {!todos.length ? (
          <Circles wrapperStyle wrapperClass className="todo-list__wrapper" />
        ) : (
          todos.map((item) => (
            <TodoItem key={item.id} task={item}>
              {item.task}
            </TodoItem>
          ))
        )}
        <FormTodo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoList;
