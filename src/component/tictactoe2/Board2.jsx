import Cell2 from "./Cell2";

const Board2 = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell2
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          classname={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell2>
      ))}
    </div>
  );
};

export default Board2;
