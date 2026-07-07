import { useState } from "react";
import Board from "./Board";

import "./gameStyles.css";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill());
  const [xIsNext, setXIsnext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsnext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill());
    setXIsnext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `winner is ${winner}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
      {/* {winner ? `winner is ${xIsNext ? "X" : "O"}` : ""} */}
    </div>
  );
};

export default Game;
