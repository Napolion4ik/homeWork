import { useCallback, useState } from "react";
import { postSticker } from "../services/requestApi";

function PostSticker({ run }) {
  const [text, setText] = useState("");
  const addSticker = useCallback(
    (value, e) => {
      e.preventDefault();
      postSticker(value).then(() => run());
      setText("");
    },
    [run]
  );

  return (
    <form onSubmit={(e) => addSticker(text, e)} className="form-sticker">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostSticker;
