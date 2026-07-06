import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div>
      <div className="container">
        {props.children}
        {YoutubeData.map((item, index) => {
          let newClass = "";
          if (index === 1) newClass = "abc";
          {
            /* const newClass = index === 1 ? "abc" : ""; */
          }
          return (
            <YoutubeItem
              key={item.id}
              author={item.author}
              title={item.title}
              avatar={item.avatar || item.image}
              image={item.image}
              className={newClass}
            ></YoutubeItem>
          );
        })}
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
    </div>
  );
};

export default YoutubeList;
