import "./App.css";
import { YoutubeData } from "./YoutubeData";
// import Feature from "./component/feature";

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  return (
    <div className="container">
      {YoutubeData.map((item) => (
        <YoutubeItem
          key={item.id}
          author={item.author}
          title={item.title}
          avatar={item.avatar}
          image={item.image}
        ></YoutubeItem>
      ))}
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      {/* <YoutubeItem
        author="Việt Hà 1"
        title="hehhehe"
        avatar="https://images.unsplash.com/photo-1771365095302-5ea5ed3e1388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1771387925581-cb0e1d64f506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D"
      ></YoutubeItem>
      <YoutubeItem
        author="Việt Hà 2"
        avatar="https://images.unsplash.com/photo-1770752609290-264c53dc54a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fHw%3D"
        image="https://images.unsplash.com/photo-1771347819259-487a944f006f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
      ></YoutubeItem> */}
    </div>
  );
}
function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image" style={{ height: "250px" }}>
        <img
          src={props.image}
          style={{
            width: "100%",
            maxWidth: "100%",
            display: "block",
            objectFit: "cover",
            height: "100%",
          }}
        ></img>
      </div>
      <div className="youtube-footer">
        <img className="youtube-avatar" src={props.avatar}></img>
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "1234567"}</h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
