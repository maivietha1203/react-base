import "./App.css";
import YoutubeList from "./component/youtube/YoutubeList";

// import Feature from "./component/feature";

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  const name = "Mai Việt Hà";
  return (
    <div>
      <YoutubeList>{name}</YoutubeList>
    </div>
  );
}

export default App;
