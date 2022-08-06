import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostId, removePostId, deletePostId } from "../../api/api";
import { Circles } from "react-loader-spinner";
import "./todoShowAll.css";

function TodoShowAll() {
  const [data, setData] = useState(null);
  const [task, setTask] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getPostId(id).then(({ data }) => setData(data));
  }, [id]);
  const goBack = (to) => {
    navigate(to);
  };

  return (
    <div className="container">
      <div className="todo-all">
        {data ? (
          <>
            <button
              onClick={() => {
                deletePostId(id).then(() => {
                  goBack(-1);
                });
              }}
              className="todo-item__button"
            >
              Удалить
            </button>
            <p className="todo-all__text">
              <span className="todo-all__text--span">ID:</span> {data.id}
            </p>
            <p className="todo-all__text">
              <span className="todo-all__text--span">Task:</span>
              {task ? (
                <span onClick={() => setTask(!task)}>{data.task}</span>
              ) : (
                <input
                  onChange={(e) => setData({ ...data, task: e.target.value })}
                  value={data.task}
                  type="text"
                />
              )}
            </p>
            <p className="todo-all__text">
              <span className="todo-all__text--span">Description:</span>{" "}
              {task ? (
                <span onClick={() => setTask(!task)}>{data.description}</span>
              ) : (
                <input
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  value={data.description}
                  type="text"
                />
              )}
            </p>
            <p className="todo-all__text">
              <span className="todo-all__text--span">Completed:</span>{" "}
              {JSON.stringify(data.completed)}
            </p>
            {!task && (
              <button
                onClick={() => {
                  console.log("submit");
                  setTask(!task);
                  removePostId(data.id, data);
                  goBack("/");
                }}
                className="todo-all__back submit"
              >
                Потвердить
              </button>
            )}
            <button className="todo-all__back" onClick={() => goBack(-1)}>
              Назад
            </button>
          </>
        ) : (
          <Circles />
        )}
      </div>
    </div>
  );
}

export default TodoShowAll;
