import { useState } from "react";
import { Link } from "react-router-dom";
import { removeCompletedId } from "../../api/api";
import "./todoItem.css";

function TodoItem({ task, children }) {
  const [completed, setCompleted] = useState(task.completed);
  return (
    <div>
      <Link className="todo-item" to={task.id}>
        <input
          type="checkbox"
          onChange={() => {
            removeCompletedId(task.id, { ...task, completed: !task.completed });
            setCompleted(!completed);
          }}
          onClick={(e) => e.stopPropagation()}
          checked={completed}
        />
        <p className="todo-item__task-text">{children}</p>
      </Link>
    </div>
  );
}

export default TodoItem;
