import { useState } from "react";

function Todoitem({ item, deleteTodo, completedTodo, removeTodo }) {
  const [change, setChange] = useState(false);
  const [textTodo, setTextTodo] = useState(item.title);

  return (
    <div
      className={`todo-task ${item.completed ? "done" : ""}`}
      onClick={() => completedTodo(item.id)}
    >
      {!change ? (
        <p>{item.title}</p>
      ) : (
        <input
          className="change-input"
          type="text"
          value={textTodo}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            setTextTodo(e.target.value);
          }}
        />
      )}
      <div>
        <button
          className={`remove-button ${change && "submit"}`}
          onClick={(e) => {
            e.stopPropagation();
            setChange(!change);
            {
              change && removeTodo(item.id, textTodo);
            }
          }}
        >
          {!change ? "Remove" : "Submit"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
