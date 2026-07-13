import "./App.css";
import Button from "./component/button/Button";
// import DoubleCouter from "./component/counter/DoubleCouter";
// import Game from "./component/tictactoe/Game";
// import Counter from "./component/counter/Counter";
// import Toggle from "./component/toggle/Toggle";
// import YoutubeList from "./component/youtube/YoutubeList";

// import Feature from "./component/feature";

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  // const name = "Mai Việt Hà";
  return (
    <div>
      {/* <YoutubeList>{name}</YoutubeList> */}
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <DoubleCouter></DoubleCouter> */}
      <Button>Primary</Button>
      <Button secondary>Primary</Button>
    </div>
  );
}

export default App;
