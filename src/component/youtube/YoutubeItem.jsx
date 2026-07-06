const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image}></img>
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
};

export default YoutubeItem;
