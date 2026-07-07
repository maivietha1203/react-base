import { calculatewinner } from "../../helper";
import Cell from "./Cell";

const Board = () => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calculatewinner(cells));
  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default Board;
