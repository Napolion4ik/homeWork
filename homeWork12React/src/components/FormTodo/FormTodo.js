import { useState } from "react";
import { createPostId } from "../../api/api";
import "./formTodo.css";

function FormTodo({ todos, setTodos }) {
  const [textTask, setTextTask] = useState("");
  const [textDesription, setTextDescription] = useState("");
  const submitPost = (e) => {
    e.preventDefault();
    const body = {
      task: textTask,
      description: textDesription,
      completed: false,
      id: todos.lenght + 1,
    };
    createPostId(body)
      .then(() => setTodos([...todos, body]))
      .finally(() => {
        setTextTask("");
        setTextDescription("");
      });
  };
  return (
    <div>
      <div className="container">
        <div className="form--todo">
          <form>
            <p>Task</p>
            <input
              value={textTask}
              onChange={(e) => setTextTask(e.target.value)}
              type="text"
            />
            <p>Description</p>
            <input
              value={textDesription}
              onChange={(e) => setTextDescription(e.target.value)}
              type="text"
            />
            <button onClick={submitPost}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormTodo;
