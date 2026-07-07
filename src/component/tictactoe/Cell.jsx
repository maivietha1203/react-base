// const Student = {
//         name: 'maiha',
//         age: 19,
// };
// const name = Student.name;
// const age = Student.age;
// const {name, age} = Student;
const Cell = ({ value, onClick, className }) => {
  // cách 1
  // const {value, onClick} = props;
  // console.log(value, onClick);
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
