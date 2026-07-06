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
  console.log(on, setOn);

  return <div className="toggle"></div>;
}
export default Toggle;
