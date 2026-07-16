import { useReducer } from "react";
import Board2 from "./Board2";
import { calculateWinner } from "../../helper";
import "./Styles.css";

const initialState = {
  board: Array(169).fill(null),
  history: [Array(169).fill(null)],
  currentMove: 0,
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { history, board, xIsNext, currentMove } = state;
      const { index } = action.payload;
      if (calculateWinner(board) || board[index]) return state;
      const nextBoard = [...board];
      nextBoard[index] = xIsNext ? "X" : "O";
      const nextHistory = [...history.slice(0, currentMove + 1), nextBoard];
      return {
        ...state,
        board: nextBoard,
        history: nextHistory,
        currentMove: nextHistory.length - 1,
        xIsNext: !xIsNext,
      };
    }
    case "JUMP": {
      return {
        ...state,
        board: state.history[action.payload],
        currentMove: action.payload,
        xIsNext: action.payload % 2 === 0,
      };
    }
    case "RESET": {
      return {
        board: Array(169).fill(null),
        history: [Array(169).fill(null)],
        currentMove: 0,
        xIsNext: true,
      };
    }
    default:
      return state;
  }
};

const Game2 = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
      },
    });
  };
  const handleJump = (move) => {
    dispatch({
      type: "JUMP",
      payload: move,
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div className="container">
      <div className="main">
        <div className="game">
          <div className="article">
            <div className="game-board">
              <Board2 cells={state.board} onClick={handleClick} />
            </div>
            <div className="game-info">
              <div>
                <button className="reset" onClick={handleReset}>
                  Reset
                </button>
                <p>
                  {winner
                    ? `Người thắng: ${winner}`
                    : `Lượt tiếp theo: ${state.xIsNext ? "X" : "O"}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-move">
          <div className="current-move">
            <ol style={{ listStyle: "none" }}>
              {state.history.map((item, move) => (
                <li key={move}>
                  <button
                    className="btn-move"
                    onClick={() => handleJump(move)}
                    style={{ width: "100%" }}
                  >
                    {move === 0 ? "Quay về đầu game" : `Đến bước #${move}`}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game2;
