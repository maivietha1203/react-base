import "./App.css";
import Game2 from "./component/tictactoe2/Game2";
// import Game from "./component/tictactoe/Game";

// import Card from "./component/card/Card";

function App() {
  return (
    <>
      {/* {Array(5)
        .fill(0)
        .map((index) => (
          <Card key={index} />
        ))} */}
      {/* <Game /> */}
      <Game2></Game2>
    </>
  );
}

export default App;
