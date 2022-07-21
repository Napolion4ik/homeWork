import { useEffect, useState } from "react";
import "./todo.css";
import Todoitem from "./Todoitem";

function Todolist() {
  const [task, setTask] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const addTodoTask = (e) => {
    e.preventDefault();
    const newTodo = {
      title: task,
      completed: false,
      id: +data[data.length - 1].id + 1,
    };

    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then(() => setData([...data, newTodo]))
      .finally(() => setTask(""));
  };

  const deleteTodo = (id) => {
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "DELETE",
    }).then(() => setData(data.filter((item) => item.id !== id)));
  };

  const completedTodo = (id) => {
    const item = data.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }).then(() =>
      setData(data.map((item) => (item.id === id ? newItem : item)))
    );
  };

  const removeTodo = (id, newTitle) => {
    const item = data.find((todo) => todo.id === id);
    const newItem = { ...item, title: newTitle };
    fetch("https://612687da3ab4100017a68fd8.mockapi.io/todos" + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }).then(() =>
      setData(data.map((item) => (item.id === id ? newItem : item)))
    );
  };

  return (
    <>
      <div className="list">
        {data ? (
          data.map((item) => (
            <Todoitem
              removeTodo={removeTodo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <div className="loader" />
        )}
      </div>
      <form>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
        <button onClick={addTodoTask}>SUBMIT</button>
      </form>
    </>
  );
}

export default Todolist;
