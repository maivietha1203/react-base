import "./App.css";
// import Feature from "./component/feature";

function App() {
  return (
    <div>
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem image="https://images.unsplash.com/photo-1771365095302-5ea5ed3e1388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"></YoutubeItem>
      <YoutubeItem image="https://images.unsplash.com/photo-1771347819259-487a944f006f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"></YoutubeItem>
    </div>
  );
}
function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image}></img>
      </div>
      <div className="youtube-footer">
        <img
          className="youtube-avatar"
          src="https://images.unsplash.com/photo-1771329335427-6fff712c47d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className="youtube-info">
          <h3 className="youtube-title">learning react</h3>
          <h4 className="youtube-author">Viet Ha</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
