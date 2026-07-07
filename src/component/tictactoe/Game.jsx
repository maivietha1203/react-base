import { useState } from "react";
import Board from "./Board";

import "./gameStyles.css";
import { calculateWinner } from "../../helper";

const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill());
  //   const [xIsNext, setXIsnext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsnext((xIsNext) => !xIsNext);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill());
    // setXIsnext(true);
    setState({
      ...state,
      board: Array(9).fill(),
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? `winner is ${winner}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
      {/* {winner ? `winner is ${xIsNext ? "X" : "O"}` : ""} */}
    </div>
  );
};

export default Game;
