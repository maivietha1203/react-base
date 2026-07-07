// function Toggle() {
//   return <div className="toggle"></div>;
// }
// function Toggle2() {
// const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }
import { useState } from "react";
import "./ToggleStyles.css";
function Toggle() {
  //   const array = useState(false);
  //   console.log(array);
  const [on, setOn] = useState(false);
  console.log(on);

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </div>
  );
}
export default Toggle;
