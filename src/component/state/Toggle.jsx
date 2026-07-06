// function Toggle() {
//   return <div className="toggle"></div>;
// }
// function Toggle2() {
// const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }
import { useState } from "react";
function Toggle() {
  //   const array = useState(false);
  //   console.log(array);
  const [on, setOn] = useState(false);
  console.log(on);

  return (
    <div className="toggle" onClick={() => setOn(true)}>
      Toggle {on ? "On" : "Off"}
    </div>
  );
}
export default Toggle;
