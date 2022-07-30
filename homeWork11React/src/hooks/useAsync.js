import { useCallback, useState } from "react";

function useAsync(fn, defaultValue = []) {
  const [status, setStatus] = useState("LOADING");
  const [data, setData] = useState(defaultValue);

  const run = useCallback(() => {
    setStatus("LOADING");

    fn()
      .then(({ data }) => {
        setStatus(!data.length ? "Pleas add sticker" : "Done");
        setData(data);
        return data;
      })
      .catch((error) => {
        setStatus("ERROR");
        return Promise.reject(error);
      });
  }, [fn]);

  return {
    status,
    data,
    setData,
    run,
  };
}

export default useAsync;
