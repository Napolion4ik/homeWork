import { useState, useEffect } from "react";
import Board from "../Board/Board";

function Game() {
  const [squaresHistory, setSquaresHistory] = useState(() => [
    { squares: Array(9).fill(null) },
  ]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const current = squaresHistory[stepNumber];
    const winner = calculateWinner(current.squares);
    setWinner(winner);
  }, [stepNumber, squaresHistory]);

  const handleClick = (i) => {
    const history = squaresHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) return;
    squares[i] = xIsNext ? "X" : "O";
    setSquaresHistory([...squaresHistory, { squares }]);
    setStepNumber(history.length);
    setXisNext((prevXisNext) => !prevXisNext);
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    const newHistory = squaresHistory.slice(0, step + 1);
    setSquaresHistory(newHistory);
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const renred = () => {
    const current = squaresHistory[stepNumber];
    const moves = squaresHistory.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return {
      current,
      moves,
    };
  };
  const giveCurrent = () => {
    const { current } = renred();
    return current.squares;
  };
  const giveMoves = () => {
    const { moves } = renred();
    return moves;
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squaresAll={giveCurrent()} onHandlerClick={handleClick} />
      </div>
      <div className="game-info">
        <div>
          {winner
            ? `Переможець ${winner}`
            : `Хід гравця ${xIsNext ? "X" : "O"}`}
        </div>
        <ol>{giveMoves()}</ol>
      </div>
    </div>
  );
}

export default Game;
