import "./App.css";
import { useEffect } from "react";
import Sticker from "./components/Sticker";
import NotFound from "./components/NotFound";
import { getData } from "./services/requestApi";
import PostSticker from "./components/PostSticker";
import { Triangle } from "react-loader-spinner";
import useAsync from "./hooks/useAsync";

function App() {
  const { status, data, run } = useAsync(getData);

  useEffect(() => {
    run();
  }, [run]);

  return (
    <div className="container">
      {!data.length ? (
        status === "LOADING" ? (
          <Triangle />
        ) : (
          <NotFound status={status} />
        )
      ) : (
        <div className="container__sticker">
          {data.map((item) => (
            <Sticker key={item.id} run={run} data={item} />
          ))}
        </div>
      )}
      <PostSticker data={data} run={run} />
    </div>
  );
}

export default App;
