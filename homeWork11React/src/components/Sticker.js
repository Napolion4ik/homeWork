import { useState, useRef, useEffect, useCallback } from "react";
import { deleteSticker, removeSticker } from "../services/requestApi";

function Sticker({ data, run }) {
  const [text, setText] = useState(data.description);
  const [showWarning, setShowFarning] = useState(false);
  const [change, setChange] = useState(true);
  const prevText = useRef();

  useEffect(() => {
    setTimeout(() => {
      prevText.current = data.description;
      setShowFarning(false);
    }, 7000);
  }, [data]);

  const handlerDeleteSticker = (id) => {
    deleteSticker(id).then(() => run());
  };

  const handlerRemoveSticker = (text, id) => {
    removeSticker(text, id).then(() => {
      run();
      setChange(!change);
      setShowFarning(!showWarning);
    });
  };
  const handlerBackSticker = useCallback(
    (text, id) => {
      removeSticker(text, id).then(() => {
        run();
        setText(text);
        setShowFarning(false);
      });
    },
    [run]
  );

  return (
    <div className="sticker">
      {showWarning && (
        <div className="warning">
          <p>To bring back?</p>
          <button onClick={() => handlerBackSticker(prevText.current, data.id)}>
            Yes
          </button>
        </div>
      )}
      <button
        className="close-sticker"
        onClick={() => handlerDeleteSticker(data.id)}
      ></button>

      {change ? (
        <p onClick={() => setChange(!change)}>{text}</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlerRemoveSticker(text, data.id);
          }}
        >
          <input
            type="text"
            className="input-sticker"
            onBlur={() => handlerRemoveSticker(text, data.id)}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      )}
    </div>
  );
}

export default Sticker;
